/* *********************************************
 *  Page Object File Name: imageZoom.spec.cy.js
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

Given("A guest on the pdp page with product image", () => {
    url = com.getPID(pidType.COLORVARIATIONPID);
    com.getURLPath(url);
});

let count = [];

When("user hovers over the main product image", () => {
    if (Cypress.env("sally_home") === domains.domains.baseURLCanada) {
        pdp.getFirstColorAvailableOption().first().click();
    }
    pdp.getListOfImageGallery()
        .each((el) => {
            count.push(el);
        })
        .as("listOfImages");
});

Then("It should zoom into the image", () => {
    cy.get("@listOfImages").then(() => {
        for (let index = 2; index < count.length + 1; index++) {
            cy.get(
                "#sliderNav0 > div > div > div:nth-child(" +
                    index.toString() +
                    ") > div > div > img"
            ).click();
            cy.get(".item.zoom")
                .invoke("attr", "style")
                .should("include", "width: 100%");
        }
    });
});
