/* *********************************************
 *  Page Object File Name: commonSteps.spec.js
 *  Initial Development By: Edgar Chavez
 *                          Ulugbek Iskanadzhiev
 *                          and Hajymyrat Atayev
 *  Date: 20230310
 * *********************************************
 *  For Common Actions shared by several specs
 *********************************************** */

import { Given, Then, When, And, But, Before, After } from "@badeball/cypress-cucumber-preprocessor";
import CategoryPage from "../../pageObjects/CategoryPage.po";
import CartPage from "../../pageObjects/CartPage.po";
import domains from "../../../fixtures/domains.json";
import common from "./common.spec";
import pidType from "./enum";
import CommonActions from "./common.spec";
import InstorePickup from "../../pageObjects/InstorepickupPage.po";


const categoryPage = new CategoryPage();
const cartPage = new CartPage();
const co = new common();
const ca = new CommonActions();
const instore = new InstorePickup();
let url ='';


Given('user on the cart page with an available ship to me item in cart', () => {
    // co.navigateTo(domains.domains.hairColorPage);
    // co.getGridPLPPage();

    // categoryPage.getFirstOptionFromModalChooserPLP().click();
    // categoryPage.getAddToBagButtonModalPLP().should('be.visible').then(() => {
    //     categoryPage.getAddToBagButtonModalPLP().click();
    // });
    // cartPage.getgotoBagbtn().click({ force: true })
    co.addProdct(co.getPID(pidType.QTYVARIATIONPID), 1);
    co.navigateTo('/cart');

});

Given('User visits the Sally Home Page', () => {
    co.navigateTo('/');
});

Given('User is at PLP Page', () => {
    co.navigateTo(domains.domains.hairColorPage);
});

Then('A pop message displays', () => {
    categoryPage.getItemAddedToBagAlertModalPresent().should('be.visible');
});

Given("a guest user is on the PDP page for an indiviual product", () => {
    url = co.getPID(pidType.INDIVIDPID);
    co.getURLPath(url);
});

Given ('Authenticated user on the checkout shipping address page with simple product for instore Pickup in their baskets',()=>{

      ca.navigateTo(domains.domains.loginPage);
      cy.intercept('**Checkout-GetRestrictedSKUs**').as('instore');
      cy.fixture('accounts').then(function (accounts) {
      let account = accounts["cosmoTemplate01"];
       cy.login(account);
       co.addProdct(co.getPID(pidType.BOPISPID), 1);
       co.navigateTo('/cart');   
       ca.navigateToURL(domains.domains.deliveryPage);
    }); 
    
});
Given ('Authenticated user on the checkout Payment page for instore Pickup', ()=>{

    ca.navigateTo(domains.domains.loginPage);
    cy.intercept('**CheckoutServices-SubmitPayment**').as('payment');
    cy.fixture('accounts').then(function (accounts) {
     let account = accounts["cosmoTemplate01"];
     cy.login(account);
    co.addProdct(co.getPID(pidType.BOPISPID), 1);
    co.navigateTo('/cart');
    ca.navigateToURL(domains.domains.paymentPage);
      });

});
