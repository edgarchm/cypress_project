/// <reference types="Cypress" />
import { Given, Then, When, And } from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from "../../common-step-definitions/common.spec";
import CommonSteps from "../../common-step-definitions/commonSteps.spec";
import CartPage from "../../../pageObjects/cartPage.po";
import { slowCypressDown } from "cypress-slow-down";
const commonActions = new CommonActions();
const cartPage = new CartPage();

/****************************   Feature   ***************************************
  
 Guest User is navigated to cart page with an available ship to me item in 
 cart and navigates to chechkout button, user should see 
 Guest Checkout Modal, Create Account Modal and Login Modal

 ****************************   End       ***************************************/

// Given ('user on the cart page with an available ship to me item in cart', () =>{})


When('user clicks the CHECKOUT button', () => {
    cartPage.getChechOutButton().click();
})
Then('user should see {string}', (modalOptions) => {
    switch (modalOptions) {
        case "Guest CheckOut ":
            cartPage.getCheckoutModalbtn().should('equal', modalOptions);
            break;
        case "Create Account":
            cartPage.getCreatAccntModalbtn().should('be.visible')

            break;
        case "Log In":
            cartPage.getLoginModalbtn()
            .invoke("text")
            .then((text)=>{
                expect(text.trim()).to.equal(modalOptions)
            })
            break;
    }

})