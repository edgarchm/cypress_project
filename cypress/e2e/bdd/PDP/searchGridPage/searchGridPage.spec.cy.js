/// <reference types="Cypress" />
import {
    Given,
    Then,
    When,
    And,
    Before,
} from "@badeball/cypress-cucumber-preprocessor";
import CommonSteps from "../../common-step-definitions/common.spec";
import ProductPage from "../../../pageObjects/ProductPage.po";
import domains from "../../../../fixtures/domains.json";
import HomePage from "../../../pageObjects/HomePage.po";
const pdp = new ProductPage();
const hm = new HomePage();
const com = new CommonSteps();

Given(
    "a guest user with a list of products  for searching on the home page",
    () => {
        com.navigateTo(domains.domains.home);
        cy.title().should("eq", "Sally Beauty: Pro Quality. For Less.");
    }
);
let _product;
When(
    "a guest enters each {string} into the search box and clicks search",
    (product) => {
        hm.getSimpleSearch()
            .first()
            .then((e) => {
                cy.wrap(e)
                    .find("input.form-control.search-field")
                    .type(`${product}`);
                _product = `${product}`;
                cy.wrap(e).find("button").click();
            });
    }
);

// #product-grid-search > div:nth-child(1) div:nth-child(2) > div > div.pdp-link
Then("list of searched items should be displayed in PLP page", () => {
    pdp.getListOfProductGrid()
        .not(".grid-footer")
        .each((el, index, list) => {
            cy.log(list.length);
            let elText = el.find("div.pdp-link").text().toLowerCase();
            if (index === 0) {
                expect(elText).to.contain(_product.toLowerCase());
            }
        });
});
