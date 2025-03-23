/* *********************************************
 *  Page Object File Name: AddNewCreditOrDebit.spec.cy
 *  Initial Development By: Edgar Chavez
 *  Date: 20230202
 * ******************************************* */
import { Given, Then, When, And } from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from "../common-step-definitions/common.spec";
import CommonSteps from "../common-step-definitions/commonSteps.spec";
import CartPage from '../../pageObjects/CartPage.po'
import CategoryPage from '../../pageObjects/CategoryPage.po';
import domains from "../../../fixtures/domains.json";
import accounts from "../../../fixtures/accounts.json";
import guest from "../../../fixtures/guest.json";

const ca = new CommonActions();

const cartPage = new CartPage();
const categoryPage = new CategoryPage();

let firstName = accounts.cosmoTemplate01.customer.first_name;
let lastName = accounts.cosmoTemplate01.customer.last_name;
let streetAddress1 = accounts.cosmoTemplate01.customer.addresses[0].address1;
let city = accounts.cosmoTemplate01.customer.addresses[0].city;
let state = accounts.cosmoTemplate01.customer.addresses[0].state_name;
let postalCode = accounts.cosmoTemplate01.customer.addresses[0].postal_code;
let email = accounts.cosmoTemplate01.customer.email;
let phone = accounts.cosmoTemplate01.customer.phone_mobile;

let cardNumber = accounts.cosmoTemplate01.customer.c_cardNumber;
let cvvCode= '630';
let cardMonth = '01';
let cardYear = '2032';

let siteID = Cypress.env("siteID");

Given ('Guest customer with items in cart is ready moves to checkout', () => {
cy.log(streetAddress1);
    ca.navigateTo(domains.domains.hairCarePage);
    categoryPage.getAddToBagFirstProductPLP().should("be.visible").then(()=> {
        categoryPage.getAddToBagFirstProductPLP().click().then(()=> {
           cy.get('.goto-bag-btn').click().then(()=> {
              cy.get('#checkoutBtn').click().then(()=>{
                cy.get('.btn.btn-block.btn-primary.checkout-button.checkout-as-guest').click();
              });
           });
        });
    });
});

When ('User completes information for delivery address',()=>{
    cy.get('#shippingFirstName').type(firstName);
    cy.get('#shippingLastName').type(lastName);
    cy.get('#shippingAddressOne').type(streetAddress1);
    cy.get('#shippingAddressCity').type(city);
    cy.get('#shippingState').select(state);
    cy.get('#shippingZipCode').type(postalCode);

    cy.get('#shippingEmail').type(email);
    cy.get('#shippingPhoneNumber').type(phone);

    cy.intercept('**/CheckoutShippingServices-SubmitShipping**').as('checkoutService');
        cy.get('button[value="submit-shipping"]').click();
    cy.wait('@checkoutService');
});

When ('Enters payment information and saves it',()=>{

    ca.getIframeBody('iframe[id^="flex-microform-08"]').find('input').eq(1).should('exist').type(cardNumber);
    cy.get('#expirationMonth').select(cardMonth);
    cy.get('#expirationYear').select(cardYear);
    cy.get('#securityCode').type(cvvCode);

});

Then ('Credit Card infromations displays on payment details',()=>{
//TO-DO
});

