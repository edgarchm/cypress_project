import {
  Given,
  Then,
  When,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from "../../common-step-definitions/common.spec";
import CommonSteps from "../../common-step-definitions/commonSteps.spec";
import CartPage from "../../../pageObjects/CartPage.po";
import CategoryPage from "../../../pageObjects/CategoryPage.po";
import domains from "../../../../fixtures/domains.json";
import { slowCypressDown } from "cypress-slow-down";
const commonActions = new CommonActions();
const cartPage = new CartPage();
const categoryPage = new CategoryPage();

/**********************************************   Feature   **************************************************

Guest User is navigated to cart page and types the quantity in the box and verifies that quantity changes

**************************************************   End    **************************************************/

Given('user on the cart page with an available ship to me more than 1 item in cart', () => {
  self.navigateTo(domains.domains.hairColorPage)
  cy.url()
    .then((urlText) => {
      if (urlText.includes('SA')) {
        categoryPage.getColorItemInGridPLP().eq(0).click();
      } else {
        categoryPage.getColorItemInGridPLP().eq(1).click();
      };
    });
  categoryPage.getFirstOptionFromModalChooserPLP().click();
  categoryPage.getAddToBagButtonModalPLP().should('be.visible').then(() => {
    categoryPage.getAddToBagButtonModalPLP().click();
  });

  cartPage.getgotoBagbtn().click({ force: true });
  cartPage.getQuantityBox().clear().type('5').type('{enter}', { delay: 3000 });
  cartPage.getCard().click({ force: true })

})
When('user clicks {string} button to change quantity', (changeNumber) => {
  switch (changeNumber) {
    case "increase":

      cy.get('#quantity').should('be.visible').then((e) => {
        cy.intercept('**i**').as('increase-button')
        cartPage.getqtybtnPlus().click().type('{enter}');
        expect(e).to.be.not.null;
        expect(e).to.be.not.undefined;
        cy.log(e)
        cy.wait('@increase-button');

      });

      cy.get('.row.subtotal-label > .col-8 > p').should('contain.text', '6 Items')
      cartPage.getCard().click({ force: true })
      break;
    case "decrease":
      cartPage.getqtybtnMinus().click();
      cartPage.getCard().click({ force: true })
      break;

  }

})
Then('user verifies item quantity has {string}', (changeNumber) => {
  switch (changeNumber) {
    case "increase":
      cartPage.getCartSummaryItems()
        .should('contain.text', '6 Items')
      break;
    case "decrease":
      cartPage.getCartSummaryItems()
        .should('contain.text', '4 Items')
      break;
  }
})


