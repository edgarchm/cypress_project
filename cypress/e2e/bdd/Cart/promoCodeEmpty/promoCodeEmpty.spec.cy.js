import {
    Given,
    Then,
    When,
    And,
} from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from "../../common-step-definitions/common.spec";
import CommonSteps from "../../common-step-definitions/commonSteps.spec";
import CartPage from "../../../pageObjects/CartPage.po";
import { slowCypressDown } from "cypress-slow-down";
const commonActions = new CommonActions();
const cartPage = new CartPage();

/**********************************************   Feature   **************************************************
 
 Guest User is navigated to cart page with an available ship to me item in cart and enters an empty promo code
 
**************************************************   End    **************************************************/


//Given('user on the cart page with an available ship to me item in cart',() => {});


When('user enters empty promotion code', () => {
    cartPage.getPromoCodeApplybtn().click()
});
Then('user verifies pop up message displays "No coupon code entered"', () => {
    cartPage.getCouponErrorMssge().should('be.visible')
});
