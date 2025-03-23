/* *********************************************
 *  Page Object File Name: productSearch.spec.cy.js
 *  Initial Development By: Edgar Chavez
 *  Date: 20230202
 * ******************************************* */
import { Given, Then, When, And } from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from "../../common-step-definitions/common.spec";
import CommonSteps from "../../common-step-definitions/commonSteps.spec";
import HomePage from '../../../pageObjects/HomePage.po';

const ca = new CommonActions();
const homePage = new HomePage();
let searchTerm = 'hair color'

When ('User enters a Search Term in the Search input box, executing a search',()=>{
    homePage.getSearchInput().type(searchTerm);
});

Then ('Products related to the search are displayed in the PLP list',()=>{
    homePage.getSearchFirstItemListed().first().should('contain.text',searchTerm).then(()=>{
        homePage.getSearchFirstItemListed().first().click();
    });
});