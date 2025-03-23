/// <reference types="Cypress" />
import {
  Given,
  Then,
  When,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";

import HomePage from "../../../pageObjects/HomePage.po";
import CommonActions from "../../common-step-definitions/common.spec";
import CommonSteps from "../../common-step-definitions/commonSteps.spec";

const ca = new CommonActions();
const homePage = new HomePage();
let listOfElements;

Given(
  "as a guest user the homepage of Sally application Shop By Categories section",
  () => {
    ca.navigateTo("home/");
    cy.scrollTo(0, 938);
  }
);
let arrLenght;
let count = 0;
let indexOfClick = 0;
When("clicking to the right and to the left list of shop categories", () => {
  listOfElements = homePage
    .getListOfShopByCategories()
    .each((el, index, list) => {
      arrLenght = list.length;
      if (el.is(":visible")) {
        count++;
      }
    });
});
Then("Verify visibility of Displayed categories", () => {
  listOfElements
    .then(() => {
      indexOfClick = count;
      for (let index = 0; index < arrLenght; index++) {
        homePage.getListOfShopByCategories().eq(index).should("be.visible");
        if (index === indexOfClick - 1) {
          homePage.getNextArrow().click();
          cy.wait(2000);
          indexOfClick += count;
        }
      }
    })
    .then(() => {
      for (let index = arrLenght - 1; index >= 0; index--) {
        if (index === indexOfClick - (count + 1)) {
          homePage.getPrevArrow().click();
          cy.wait(2000);
          indexOfClick -= count;
        }
        homePage.getListOfShopByCategories().eq(index).should("be.visible");
      }
    });
});
