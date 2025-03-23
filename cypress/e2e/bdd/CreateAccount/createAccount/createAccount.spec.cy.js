/* *********************************************
 *  Page Object File Name: createAccount.spec.cy.js
 *  Initial Development By: Edgar Chavez
 *  Date: 20230202
 * ******************************************* */
import { Given, Then, When, And } from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from "../../common-step-definitions/common.spec";
import CommonSteps from "../../common-step-definitions/commonSteps.spec";
import HomePage from '../../../pageObjects/HomePage.po'
import LoginPage from '../../../pageObjects/LoginPage.po';
import CreateAccount from '../../../pageObjects/CreateAccountPage.po';
import domains from "../../../../fixtures/domains.json";
import customers from "../../../../fixtures/customers.json";

const ca = new CommonActions();

const homePage = new HomePage();
const loginPage = new LoginPage();
const createAccountPage = new CreateAccount();

let password = customers.customers.customerPassword;
let firstName = customers.customers.customerFirstName;
let lastName = customers.customers.customerLastName;

Given ('User is at the Create Account page', () => {
    ca.navigateTo(domains.domains.loginPage);
    loginPage.getCreateAccountButton().click();
});

When ('User enters profile information into the form', () => {
    let phoneNumber = ca.generatePhoneNumber();
    let emailAddress = ca.generateEmailAddress();

    createAccountPage.firstNameInput().type(firstName);
    createAccountPage.lastNameInput().type(lastName);
    createAccountPage.phoneNumberInput().type(phoneNumber);
    createAccountPage.emailAddressInput().type(emailAddress);

    createAccountPage.passwordInput().type(password);
});

When ('Unchecks the {string} checkbox', (checkBoxName) => {
    ca.uncheckCheckBox(checkBoxName);
});

When ('User clicks on the Create Account button',() =>{
   createAccountPage.createAccountButton().click();
});

Then ('A Dialog Displays a welcome message',()=>{
    createAccountPage.welcomeNewAccountDialogTitle().should('contain.text',`${firstName}`);
});