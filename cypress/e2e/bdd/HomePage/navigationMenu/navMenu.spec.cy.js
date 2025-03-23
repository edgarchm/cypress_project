/// <reference types="Cypress" />
import {Given,Then,When,And,Before} from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from "../../common-step-definitions/common.spec";
import CommonSteps from "../../common-step-definitions/commonSteps.spec";
const HomePage = require("../../../pageObjects/HomePage.po");

let ca = new CommonActions();
const homePage = new HomePage();

Given(
  "the navigation bar for guest user on the home page of Sally application",
  () => {
    ca.navigateTo("home/");
    cy.get(".navbar-menu").invoke("attr", "role").should("eq", "menu");
  }
);
let count = 0;
let arrMenu = [];
When("a guest does mouse hover on each menu", () => {
  //   this step could be more dynamic instead of 7 put smth is not static
  cy.get("ul.nav.navbar-nav.navbar-menu > li > a")
    .each((_$el, _$index, _$list) => {
      if (_$el.is(":visible")) {
        count++;
      }
    })
    .then(() => {
      homePage.getListOfNavMenu().should("have.length.greaterThan", count);
    });

  cy.get("ul.nav.navbar-nav.navbar-menu > li > a")
    .each((_$el, _$index, _$list) => {
      if (_$index >= 0 && _$index < count) {
        arrMenu.push(_$el);
      }
    })
    .then(() => {
      expect(arrMenu.length).to.be.at.least(count);
    });
});

let idOfElement;
Then(
  "a guest expected to see the hover ability of each section to display a table of product options",
  () => {
    cy.log(arrMenu);
    arrMenu.forEach((el, index, list) => {
      cy.get(el)
        .invoke("attr", "id")
        .then((id) => {
          idOfElement = id;
        });
      cy.get(el)
        .trigger("mouseover")
        .then((e) => {
          if (index !== 0 && index !== count - 1) {
            cy.wrap(el)
              .siblings("ul")
              .find("li.dropdown-item")
              .not(".d-none")
              .find(
                'ul[data-parent="#' +
                  `${idOfElement}` +
                  'dropdown-menu-accordion"]'
              )
              .should("be.visible");
          }
          cy.log(typeof el);
        });
      cy.wait(200);
    });

    //ul.nav.navbar-nav.navbar-menu > li > a ~ ul > li.dropdown-item:not(.d-none) >ul[data-parent="#beautydropdown-menu-accordion"]
    //ul.nav.navbar-nav.navbar-menu > li > a
  }
);
