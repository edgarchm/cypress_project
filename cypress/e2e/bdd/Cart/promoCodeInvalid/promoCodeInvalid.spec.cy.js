import {
    Given,
    Then,
    When,
    And,
} from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from "../../common-step-definitions/common.spec";
import CommonSteps from "../../common-step-definitions/commonSteps.spec";
import CartPage from "../../../pageObjects/cartPage.po";
import { slowCypressDown } from "cypress-slow-down";
import data from "../../../../fixtures/products.json"
const commonActions = new CommonActions();
const cartPage = new CartPage();

/**********************************************   Feature   **************************************************
 
 Guest User is navigated to cart page with an available ship to me item in cart and enters an invalid promo code
 
**************************************************   End    **************************************************/


//Given('user on the cart page with an available ship to me item in cart',() => {});
When('user enters a coupon code that is not set up on any coupons', () => {
    //data.promotion.promotion_code
    cy.fixture('products').then((products) => {
        let promotion = products["promotion"];
        promotion.promotion_code;
        cy.get('#couponCode').type(promotion.promotion_code)
        cartPage.getPromoCodeApplybtn().click({force:true})
    })
});
Then('user should see the promo code invalid message', () => {
     cartPage.getCouponErrorMssge().should('be.visible')
});
