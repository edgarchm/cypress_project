describe('CosmoProf Checkout Tests', () => {

  const addProdct = (pid, quantity) => {
    return cy.request({
      method: 'POST',
      url: '/on/demandware.store/Sites-CosmoProf-Site/default/Cart-AddProduct',
      failOnStatusCode: false,
      form: true,
      body: {
        pid: pid,
        quantity: quantity,
        actionField: 'PDP'
      },
    })
  }

  beforeEach(() => {
    cy.fixture('accounts').then(function (accounts) {
      let account = accounts["cosmoTemplate01"];
      account.customer.login = "autotest-" + Date.now() + "@test.com";
      account.customer.email = "autotest-" + Date.now() + "@stest.com";
      cy.task('createCustomer', account).then(function () {
        cy.login(account);
      });
    })
  })

  it('checkout single item', () => {
    cy.fixture('products').then(function (products) {

      // stage basket
      let product = products["product2"];
      addProdct(product.pid, 1);

      // go to cart
      cy.visit('/cart');
      cy.get('.total-cart-items').should('be.visible');

      // continue checkout
      cy.get('.check-out-button-anchor button').click();

      // input payment
      cy.get('#cardNumber-container iframe')
      .its('0.contentDocument').should('exist')
      .then(cy.wrap)
      .find('input[name="credit-card-number"]').type('4111111111111111', { timeout: 10000 });

      cy.get('#expirationMonth').select('12');
      cy.get('#expirationYear').select('2030');
      cy.get('#securityCode').type('123');
      cy.get('#email').type('autotest-foo@test.com');
      cy.get('#phoneNumber').type('2145555555');
      cy.get('.submit-payment').click();


      // order review page
      cy.get('.place-order').click();

      // wait for confirmation page
      cy.get('.confirmation-entire-wrapper', { timeout: 30000 }).should('be.visible');
    })

  })

})
