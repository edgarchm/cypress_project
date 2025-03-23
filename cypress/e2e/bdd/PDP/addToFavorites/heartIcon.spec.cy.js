/* *********************************************
 *  Page Object File Name: heartIcon.spec.cy.js
 *  Initial Development By: Ulan Isaq
 *  Date: 20230214
 * ******************************************* */
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from "../../common-step-definitions/common.spec";
import domains from "../../../../fixtures/domains.json";
import ProductPage from "../../../pageObjects/ProductPage.po";
import pidType from "../../common-step-definitions/enum";
const com = new CommonActions();
const pdp = new ProductPage();

// Scenario: As a guest I attepmts to save product by clicking icon

let url;

Given("a guest on the pdp page with selected size product", () => {
    url = com.getPID(pidType.SIZEVARIATIONPID);
    com.getURLPath(url);
});
When("user clicks to heart icon", () => {
    pdp.getSelectSizeTab().first().click();
});
Then("Page should forwarded a user to the login page", () => {
    pdp.getHeartIcon().eq(1).click();
    cy.url().should("include", domains.domains.loginPage);
});
