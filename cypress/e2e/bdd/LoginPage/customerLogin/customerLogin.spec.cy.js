/* *********************************************
 *  Page Object File Name: customerLogin.spec.cy.js
 *  Initial Development By: Ulugbek Iskanadzhiev & Edgar Chavez
 *  Date: 20230202
 * ******************************************* */
import { Given, Then, When, And } from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from '../../common-step-definitions/common.spec'
import LoginPage from '../../../pageObjects/LoginPage.po';
import CreateAccount from '../../../pageObjects/CreateAccountPage.po';
import domains from "../../../../fixtures/domains.json";

const ca = new CommonActions();
const loginPage = new LoginPage();
const createAccountPage = new CreateAccount();

Given('User is at the Sally login page', () => {
    ca.navigateTo(domains.domains.loginPage);
});

When ('User enter {string} credentials to access', (accessType) =>{
    switch(accessType){
        case "valid":
            cy.fixture('accounts').then(function (accounts) {
                let account = accounts["cosmoTemplate01"];
                account.customer.login = "autotest-" + Date.now() + "@sallybeauty.com";
                account.customer.email = "autotest-" + Date.now() + "@sallybeauty.com";
                cy.task('createCustomer', account).then(function () {
                  cy.login(account);
                });
            });
            break;
        case "invalid":
            loginPage.getUsername().type('invalidCredentials@mail.com');
            loginPage.getPassword().type('invalidPassword123');
            loginPage.getLogInButton().click();
            break;
        default:
            cy.log("Error! Undefined Access.");
    };
});

Then ('User {string} logs in',(loginStatus)=>{
    switch(loginStatus){
        case "successfully":
            createAccountPage.welcomeNewAccountDialogTitle().should('contain.text','Welcome');
            break;
        case "unsuccessfully":
            loginPage.getInvalidCredentialsMessage().should('have.text','Invalid login or password. Remember that password is case-sensitive. Please try again.');
            break;
        default:
            cy.log("Error! Undefined Status.");
    };
});