/* *********************************************
 *  Page Object File Name: klarnaContainer.spec.cy.js
 *  Initial Development By: Ulan Isaq
 *  Date: 20230222
 * ******************************************* */
import {
    Given,
    Then,
    When,
    And,
} from "@badeball/cypress-cucumber-preprocessor";
import ProductPage from "../../../pageObjects/ProductPage.po";
import CommonSteps from "../../common-step-definitions/commonSteps.spec"


const pdp = new ProductPage();

When("user attempts to learn more about Klarna interest fee payments", () => {
    pdp.getKlarnaButton().shadow().find("button").click();
});
Then("It should display Klarna container with information to proceed", () => {
    pdp.getKlarnaTab()
        .shadow()
        .find("#klarna-osm-learn-more")
        .find("#learn-more-dialog-default-default__container-wrapper")
        .should("be.visible");
});
