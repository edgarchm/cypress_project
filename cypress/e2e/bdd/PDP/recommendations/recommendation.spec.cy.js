/// <reference types="Cypress" />
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import CommonSteps from "../../common-step-definitions/common.spec";
import ProductPage from "../../../pageObjects/ProductPage.po";
import pidType from "../../common-step-definitions/enum";

const pdp = new ProductPage();

const com = new CommonSteps();
let url;

Given(
    "as guest user on the individual product PDP page with recommended products in You May Also Need",
    () => {
        url = com.getPID(pidType.INDIVIDPID);
        com.getURLPath(url);
    }
);
When("user scrolls to the You May Also Need section", () => {
    pdp.getYouMayAlsoNeedSection().scrollIntoView(); // Scrolls 'footer' into view
});
Then("users are able to see a recommended products", () => {
    pdp.getYouMayAlsoNeedSection().should("be.visible");
});
