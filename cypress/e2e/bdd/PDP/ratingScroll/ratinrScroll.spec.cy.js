/// <reference types="Cypress" />
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import CommonSteps from "../../common-step-definitions/common.spec";
import ProductPage from "../../../pageObjects/ProductPage.po";
import pidType from "../../common-step-definitions/enum";
const pdp = new ProductPage();

const com = new CommonSteps();
let url;
// Scenario: Page scrolls down when a guest on the pdp page clicks to the rating views
Given(
    "a guest is on the PDP page for an individual product with reviews",
    () => {
        url = com.getPID(pidType.INDIVIDPID);
        com.getURLPath(url);
    }
);
When("user clicks on the ratings starts", () => {
    pdp.getStarsRow().should("be.visible");
    pdp.getStarsRow().eq(1).click();
});
Then("page should be scrolled to see the review section", () => {
    cy.window().its("scrollY").should("not.equal", 0);
    pdp.getReviewSection().should("be.visible");
});
