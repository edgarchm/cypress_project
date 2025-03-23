/// <reference types="Cypress" />
import {Given,Then,When,And,} from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from "../../common-step-definitions/common.spec";
import CommonSteps from "../../common-step-definitions/commonSteps.spec";
import CartPage from "../../../pageObjects/CartPage.po";
const cartPage = new CartPage();

/****************************   Feature   **********************************
 Guest User is navigated to cart page with an available ship to me item 
 in cart and verifying 2-Hour Delivery is functional 
 
/****************************   End       **********************************/

When('user clicks on 2-Hour Delivery to enter address', () => {
  cartPage.get2HrDlvryEntAddressBtn().click();
});
Then('user verifies that pop up message displays Delivery Address to confirm address', () => {
  cartPage.getAddressModal().should('be.visible')
});
