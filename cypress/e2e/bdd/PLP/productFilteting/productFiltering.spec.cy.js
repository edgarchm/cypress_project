/* *********************************************
 *  Page Object File Name: productFiltering.spec.cy.js
 *  Initial Development By: Edgar Chavez
 *  Date: 20230202
 * ******************************************* */
import { Given, Then, When, And } from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from "../../common-step-definitions/common.spec";
import CommonSteps from "../../common-step-definitions/commonSteps.spec";
import CategoryPage from '../../../pageObjects/CategoryPage.po';

const ca = new CommonActions();
const categoryPage = new CategoryPage();
const filteredOption = 'Brand';

When ('User changes the filtering by choosing the first filter from the list',()=>{
    cy.get('label[for="'+ca.getFirstFilteringLocator()+'"]').first().click();
});

Then ('Products are filtered based on the option selected',()=>{
    categoryPage.getProductFilteringType().should('equal',filteredOption);
    categoryPage.getClearAllButton().click();
});