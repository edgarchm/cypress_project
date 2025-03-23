import {
    Given,
    Then,
    When,
    And,
} from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from "../../common-step-definitions/common.spec";
import CommonSteps from "../../common-step-definitions/commonSteps.spec";
import CartPage from "../../../pageObjects/cartPage.po";
//import { slowCypressDown } from "cypress-slow-down";
import data from "../../../../fixtures/products.json"
const commonActions = new CommonActions();
const cartPage = new CartPage();
let ca = new CommonActions();

/**********************************************   Feature   **************************************************
 
Guest User is navigated to cart page with an available ship to me items in cart, 
then types number in the box to verify item number changes accordingly

 
**************************************************   End    **************************************************/


//Given('user on the cart page with an available ship to me  items in cart', () => {})
When('user types the quantity {string} in the box', (quantityNumber) => {
switch (quantityNumber) {
    case "4":
        cartPage.getQuantityBox().clear().type('4')
        cartPage.getCard().click({force:true})
        break;
}
})
Then('user verifies item quantity changes to {string}', (quantityTotal) => {
switch(quantityTotal){
    case "4":
         cartPage.getCartSummaryItems()
                 .should('contain.text', '4 Items')                                           
        break;
}
})
                               
