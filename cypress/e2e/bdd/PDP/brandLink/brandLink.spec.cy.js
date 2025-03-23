/* *********************************************
 *  Page Object File Name: brandLink.spec.cy.js
 *  Initial Development By: Ulan Isaq
 *  Date: 20230214
 * ******************************************* */
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import ProductPage from "../../../pageObjects/ProductPage.po";
import CommonSteps from "../../common-step-definitions/commonSteps.spec"

const pdp = new ProductPage();

let uri = "";
When("user clicks the brand link", () => {
  pdp
    .getBrandLink()
    .first()
    .invoke("attr", "href")
    .then((href) => {
      if (href.toString().includes("/s/SA")) {
         uri = href.toString().replaceAll("/s/SA", "");
         cy.request(Cypress.env("sally_home")+uri).its("status").should("eq", 200);
      }
      else{
        uri = href.toString().replaceAll("/s/SC", "");
        cy.request(Cypress.env("sally_home")+uri).its("status").should("eq", 200);
      }
      cy.log(uri)
      
    });
});
Then("they should be taken to the category page for that brand", () => {
  pdp.getBrandLink().first().click({ force: true });
  cy.url().should("include", uri);
});
