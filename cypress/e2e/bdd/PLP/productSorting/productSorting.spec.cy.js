/* *********************************************
 *  Page Object File Name: productSorting.spec.cy.js
 *  Initial Development By: Edgar Chavez
 *  Date: 20230202
 * ******************************************* */
import { Given, Then, When, And } from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from "../../common-step-definitions/common.spec";
import CommonSteps from "../../common-step-definitions/commonSteps.spec";
import CategoryPage from '../../../pageObjects/CategoryPage.po';

const ca = new CommonActions();
const categoryPage = new CategoryPage();
let sortingTerm = 'Top Sellers';

When ('User changes the sorting by choosing the first sort option from the list',()=>{
    categoryPage.getSortByDropDown();
});

Then ('Products are sorted based on the option selected',()=>{
    categoryPage.getSortByDropDown().should('contain.text',sortingTerm);
});