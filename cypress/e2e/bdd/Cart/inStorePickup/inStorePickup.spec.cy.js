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
const commonActions = new CommonActions();
const cartPage = new CartPage();

/****************************   Feature   **********************************
 Guest User is navigated to cart page with an available ship to me item in 
 cart and verifying In Store Pickup is functional 
 
/****************************   End       **********************************/


//Given('user on the cart page with an available ship to me item in cart',() => {});

When('user clicks on Check Nearby Stores on product line item', () => {
  if(Cypress.env("siteID")==="SA"){
  cartPage.getInStorePickupLink().click()}
});
Then('user should be navigated to In-Store Pickup Availability page and see Check Nearby Stores', () => {
  if(Cypress.env("siteID")==="SA"){
    cartPage.getCheckNearbyStoresBtn().should('be.visible')}
  });
