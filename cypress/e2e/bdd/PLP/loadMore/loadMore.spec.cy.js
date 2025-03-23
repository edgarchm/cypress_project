/* *********************************************
 *  Page Object File Name: loadMore.spec.cy.js
 *  Initial Development By: Edgar Chavez
 *  Date: 20230202
 * ******************************************* */
import { Given, Then, When, And } from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from "../../common-step-definitions/common.spec";
import CommonSteps from "../../common-step-definitions/commonSteps.spec";
import CategoryPage from '../../../pageObjects/CategoryPage.po';
import domains from "../../../../fixtures/domains.json";

const ca = new CommonActions();
const categoryPage = new CategoryPage();
let countOfElements = 0;

Given ('Guest user is on the PLP page with load more',()=>{
    ca.navigateTo(domains.domains.hairCarePage);
    categoryPage.getPLPProductGrid().then((elements) => {
        countOfElements = elements.length;
    });
});

When ('User clicks the LOAD MORE button',()=>{
    cy.intercept('**/Search-UpdateGrid**').as('load-more-requests');
    categoryPage.getLoadMoreButton().click();
    cy.wait('@load-more-requests');
});

Then ('More items are added to the list',()=>{
    categoryPage.getPLPProductGrid().then((elements) => {
        expect(elements.length).to.be.greaterThan(countOfElements);
    });
});