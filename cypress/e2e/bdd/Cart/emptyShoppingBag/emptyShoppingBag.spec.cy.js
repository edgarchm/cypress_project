/// <reference types="Cypress" />
import { Given, Then, When, And } from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from '../../common-step-definitions/common.spec';
import CommonSteps from "../../common-step-definitions/commonSteps.spec";
import CartPage from "../../../pageObjects/cartPage.po";
import { slowCypressDown } from "cypress-slow-down";
const commonActions = new CommonActions();
const cartPage = new CartPage();

/****************************   Feature   ***************************************
 
Guest User is navigated to cart page with an available ship to me item in cart and emptying the cart

****************************   End       ***************************************/

//Given ('user on the cart page with an available ship to me item in cart', () =>{})
When('user clicks Delete item and confirms to remove the product from Remove Product modal',() => {
cartPage.getDeletebtn().click();
cartPage.getRemoveProductModal().should('be.visible')
cartPage.getrpmYESbtn().click({force:true})
  });

Then('user should see item deleted and see an EMPTY BAG', () => {
  cartPage.getEmptyBag().should('contain.text','EMPTY BAG?')
});
