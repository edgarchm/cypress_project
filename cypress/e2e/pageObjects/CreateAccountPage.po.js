/* *********************************************
 *  Page Object File Name: CreateAccountPage.po.js
 *  Initial Development By: Edgar Chavez
 *  Date: 20230202
 * ******************************************* */
class CreateAccount
{
    createAccountTitle(){
        return cy.get('.card-header');
    };
    firstNameInput(){
        return cy.get('#registration-form-fname');
    };
    lastNameInput(){
        return cy.get('#registration-form-lname');
    };
    phoneNumberInput(){
        return cy.get('#registration-form-phone');
    };
    emailAddressInput(){
        return cy.get('#registration-form-email');
    };
    passwordInput(){
        return cy.get('#registration-form-password');
    };
    joinSallyRewardsCheckbox(){
        return cy.get('label[for="add-to-email-list1"] span');
    };
    createAccountButton(){
        return cy.get('button[value="Submit"]');
    }
    welcomeNewAccountDialogTitle(){
        return cy.get('.rewards-welcome');
    }
    getInvalidPhoneMessageError(){
        return cy.get('#register > form > div:nth-child(5) > div > div > div');
    };
}
export default CreateAccount;