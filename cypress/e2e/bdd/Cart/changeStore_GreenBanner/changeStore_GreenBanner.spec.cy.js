import { Given, Then, When, And } from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from "../../common-step-definitions/common.spec";
import CommonSteps from "../../common-step-definitions/commonSteps.spec";
import CartPage from "../../../pageObjects/cartPage.po";
const commonActions = new CommonActions();
const cartPage = new CartPage();

/****************************   Feature   ***************************************
  
 Guest User is navigated to cart page with an available ship to me item in 
 cart and navigates to green banner to check the availability in near by stores

 ****************************   End       ***************************************/

When('user clicks on Pickup at store location green banner', () => {
    //cartPage.getStoreLocationGreenBanner().click({force:true});
    if(Cypress.env("siteID")==="SA"){
    cy.get('.select-store-link').eq(1).click({force:true});}
})
Then('user should be navigated to Select a store page and see Check Nearby Stores', () => {
    if(Cypress.env("siteID")==="SA"){
    cartPage.getCheckNearbyStoresBtn()
    .should('be.visible')}
})
