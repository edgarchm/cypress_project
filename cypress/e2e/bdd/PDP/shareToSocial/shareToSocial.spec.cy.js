/* *********************************************
 *  Page Object File Name: shareToSocial.spec.cy.js
 *  Initial Development By: Ulan Isaq
 *  Date: 20230222
 * ******************************************* */
import {
  Given,
  Then,
  When,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from "../../common-step-definitions/common.spec";
import CommonSteps from "../../common-step-definitions/commonSteps.spec";
import ProductPage from "../../../pageObjects/ProductPage.po";

const pdp = new ProductPage();

const com = new CommonActions();

let social;
When(
  "a user attempts to share product information on his  {string} page",
  (socialmedia) => {
    pdp
      .getListOfSocialMediaLabels()
      .find('i[title="' + `${socialmedia}` + '"]')
      .as("socialMediaIcon");
    social = socialmedia.trim();
  }
);
Then("It should be displayed on the pdp page", () => {
  cy.get("@socialMediaIcon").should("have.attr", "title").and("equal", social);
});

When("a user attempts to share product information on his  mail", () => {
  pdp.getListOfSocialMediaLabels().find('i[title="Mail"]').click();
});
Then(
  "a user should be able to see a tab-content for sending an email on the pdp page",
  () => {
    pdp.getSendToFriendMailModel().should("be.visible");
  }
);
