// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import LoginPage from '../e2e/pageObjects/LoginPage.po'
const data = require('../fixtures/domains.json');
const custom = require('../fixtures/customers.json');
const loginPage = new LoginPage();

/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />
/// <reference types = "Cypress-iframe"/>

console.log(data.domains.baseUrlSallyUS)

Cypress.Commands.add('login', (account) => {
    //cy.visit('login/');
    loginPage.getUsername().type(custom.customers.username);
    loginPage.getPassword().type(custom.customers.password);
    loginPage.getLogInHeader().should('contain.text',"Log In");
    loginPage.getLogInButton().click();
});

Cypress.Commands.add('popup',() =>{
//    Cypress.on('fail', (err, runnable) => {
//        console.log('error', err);
//        console.log('runnable', runnable);
//        if (err.name === 'AssertionError' &&
//          err.message.includes('Expected to find element: `.sms-opt-in_popup--is-open`, but never found it.')) {
//          return false;
//        };
//    });
    cy.url().then((urlText)=>{
        if(urlText.includes('SA')){
            cy.get('.sms-opt-in_popup--is-open').then(()=>{
                cy.get(' div.row.justify-content-center.sms-opt-in_popup__inner-container > button').click();
            });
        };
    });
    // cy.get('.sms-opt-in_popup--is-open',{timeout:15000}).then((e)=>{
    //     cy.get(' div.row.justify-content-center.sms-opt-in_popup__inner-container > button').click();
    // });
});


/******** NO USED ********/
// Cypress.Commands.add('login', (account) => {

//     if(Cypress.config('baseUrl') === data.domains.baseUrlCosmo){
//     cy.visit('/login');
//     cy.get('#login-form-email').type(account.customer.login, { force: true });
//     cy.get('#login-form-password').type(account.password, { force: true });
//     cy.get('#login-btn').click({force:true});
//     cy.get('.account-dashboard').should('be.visible');
// }
// else if (Cypress.config('baseUrl') === data.domains.baseUrlSallyUS){
//     cy.visit('/s/SA/login/');
//     const loginPage = new LoginPage();
//     loginPage.getUsername().type(custom.customers.username);
//     loginPage.getUsername().type(custom.customers.password);
//     loginPage.getLoginTitle().should('have.text',"Log In");
//     loginPage.getLogInButton().click();
// }
// else{
//     cy.log("define the base url!!");
// }
// })