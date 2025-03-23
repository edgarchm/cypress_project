import {
        Given,
        Then,
        When,
        And,
} from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from "../../common-step-definitions/common.spec";
import CommonSteps from "../../common-step-definitions/commonSteps.spec";
import CartPage from "../../../pageObjects/cartPage.po";
const commonActions = new CommonActions();
const cartPage = new CartPage();
let ca = new CommonActions();

/****************************   Feature   ***************************************
 
Guest User is navigated to cart page with an available ship to me item in cart and deleting and cancelling the deletion of the item and confirming bag is empty 
if deleted or still in the cart if canceled the deletion

****************************   End       ***************************************/

When('user clicks Delete item and {string} from Remove Product modal', (removeProduct) => {
        switch (removeProduct) {
                case "confirm":
                        cartPage.getDeletebtn().click();
                        cartPage.getRemoveProductModal().should('be.visible');
                        cartPage.getrpmYESbtn().click({ force: true })
                        break;
                case "cancel":
                        cy.intercept('**i**').as('is')
                        cartPage.getDeletebtn().click();
                        cartPage.getRemoveProductModal().should('be.visible');
                        cy.wait('@is')
                        cartPage.getrpmCancelbtn().should('contain.text', 'Cancel').then((e) => {
                                
                                cartPage.getrpmCancelbtn().click({force:true}).type('{enter}', { delay: 3000 })
                                cy.log(e)
                               
                        })
                        break;
        }
})
Then('user should see {string}', (cartStatus) => {

        switch (cartStatus) {
                case "emptyBag":
                        cartPage.getEmptyBag().should('contain.text', 'EMPTY BAG?')
                        break;

                case "itemintheBag":
                        cy.get('.product-info.product-card').scrollIntoView({
                                easing: 'linear',
                                duration: 3000,
                        })
                       
                        break;
        }
})