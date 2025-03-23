/* *********************************************
 *  Page Object File Name: imageGallery.spec.cy.js
 *  Initial Development By: Ulan Isaq
 *  Date: 20230220
 * ******************************************* */
import {
    Given,
    Then,
    When,
    And,
} from "@badeball/cypress-cucumber-preprocessor";
import ProductPage from "../../../pageObjects/ProductPage.po";
import CommonActions from "../../common-step-definitions/common.spec";
import domains from "../../../../fixtures/domains.json";
import pidType from "../../common-step-definitions/enum";

const pdp = new ProductPage();
const com = new CommonActions();
let url;

Given("a guest on the pdp page with any product which has images", () => {
    url = com.getPID(pidType.COLORVARIATIONPID);
    com.getURLPath(url);
});
When("user click to next image", () => {
    if (Cypress.env("sally_home") === domains.domains.baseURLCanada) {
        pdp.getFirstColorAvailableOption().first().click();
    }
    pdp.getListOfImageGallery().each((el) => {
        let indexElement;

        cy.wrap(el)
            .click()
            .click()
            .invoke("attr", "data-slick-index")
            .then((i) => {
                indexElement = i;
            })
            .then(() => {
                cy.wrap(el)
                    .should("be.visible")
                    .should((item) => {
                        expect(item).to.not.be.null;
                        expect(item).to.not.be.undefined;
                        expect(item).to.not.be.NaN;
                        expect(item).to.not.be.empty;
                    });
                cy.wait(500);
                pdp.getImageZoom()
                    .should("be.visible")
                    .then(() => {
                        // cy.intercept('**/i?**').as('hair-color')
                        pdp.getImageZoom()
                            .invoke("attr", "data-slick-index")
                            .should("eq", indexElement);
                        //  cy.wait('@hair-color')
                    });
            });
    });
});
Then("It should switch to next image on the page", () => {});
