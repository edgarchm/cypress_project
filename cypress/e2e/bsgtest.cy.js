describe('CosmoProf Basic Tests', () => {

  beforeEach(() => {
    cy.fixture('accounts').then(function (accounts) {
      let account = accounts["cosmoTemplate01"];
      account.customer.login = "autotest-" + Date.now() + "@test.com";
      account.customer.email = "autotest-" + Date.now() + "@test.com";
      console.log(account.customer.login)
      cy.task('createCustomer', account);

      cy.login(account);
    })
    
  })

  it('check my account', () => {
    cy.visit('/');
    cy.get('.nav-account-info-icon').click();
    cy.get('.account-dashboard').should('be.visible');
  })

  it('search hair color', () => {
    cy.visit('');
    cy.get('input.nav-search-input:visible').type('hair color{enter}');
    cy.get('.search-keywords').should('contain.text', 'hair color');
  })

  it('add item to basket', () => {
    cy.fixture('products').then(function (products) {
      let product = products["product1"];
      cy.visit('/' + product.pid + '.html');
      cy.get('[data-attr="size"]').find('button').last().click();
      cy.get('.add-to-cart').click();
      cy.get('.add-to-basket-alert').should('be.visible');
    })
  })

})
