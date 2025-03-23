/* *********************************************
 *  Page Object File Name: addToBag.spec.cy.js
 *  Initial Development By: Edgar Chavez
 *  Date: 20230202
 * ******************************************* */
import {Given,When,Then,And} from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from "../../common-step-definitions/common.spec";
import CommonSteps from "../../common-step-definitions/commonSteps.spec";
import HomePage from "../../../pageObjects/HomePage.po";
import CategoryPage from "../../../pageObjects/CategoryPage.po";
import ProductPage from "../../../pageObjects/ProductPage.po";
import domains from "../../../../fixtures/domains.json";

const ca = new CommonActions();
const homePage = new HomePage();
const categoryPage = new CategoryPage();
const productPage = new ProductPage();

/* *********Shared Scenario***************/
Given("Guest user on PLP {string} product page", (addToBagExample) => {
    switch (addToBagExample) {
        case "simple":
            ca.navigateTo(domains.domains.hairCarePage);
            break;
        case "color":
            ca.navigateTo(domains.domains.hairColorPage);
            break;
        case "size":
            ca.navigateTo(domains.domains.bottlesAndSprayersPage);
            break;
        case "bundles":
            ca.navigateTo(domains.domains.homePage);
            break;
        default:
            cy.log("Error! Selection not Defined.");
            break;
    }
});

When("User clicks the Add to Bag button on the first {string} available item",(addToBagExample)=> {
    switch (addToBagExample) {
        case "simple":
            categoryPage.getAddToBagFirstProductPLP().should("be.visible").then(()=> {
                categoryPage.getAddToBagFirstProductPLP().click();
            });
            break;
        case "color":
            cy.url().then((urlText) => {
                if (urlText.includes("SA")) {
                    categoryPage.getColorItemInGridPLP().eq(0).click();
                } else {
                    categoryPage.getColorItemInGridPLP().eq(1).click();
                }
            });
            categoryPage.getFirstOptionFromModalChooserPLP().click();
            categoryPage.getAddToBagButtonModalPLP().should("be.visible").then(()=> {
                categoryPage.getAddToBagButtonModalPLP().click();
            });
            break;
        case "size":
            categoryPage.getQuickViewPLPButton().click({force: true});
            categoryPage.getPLPModalWindow().should('be.visible').then(()=>{
                cy.intercept('**/Product-Variation?**').as('prodVariation');
                categoryPage.getSizeModalPLPButton().click();
                cy.wait('@prodVariation');
            });

            categoryPage.getAddToBagSizeButtonModalPLP().should('be.visible').then(()=>{
                cy.get('.slick-current .zoom').find('img').should('have.attr', 'src');
                categoryPage.getAddToBagSizeButtonModalPLP().should('be.enabled').then(()=>{
                    cy.intercept('**/Cart-AddProduct?quickViewAddToBag=true**').as('addToBag-requests');
                    categoryPage.getAddToBagSizeButtonModalPLP().dblclick();
                    cy.wait('@addToBag-requests');
                });
            });
            break;
        case "bundles":
            homePage.getSearchInput().type(addToBagExample);
            homePage.getSearchFirstItemListed().click();
            categoryPage.getQuickViewPLPButton().click({force: true});

            categoryPage.getPLPModalWindow().should('be.visible').then(()=>{
                categoryPage.getAddToBagBundleButtonModalPLP().should('be.visible').then(()=>{
                    cy.get('.slick-current .zoom').find('img').should('have.attr', 'src');
                    categoryPage.getAddToBagBundleButtonModalPLP().should('be.enabled').then(()=>{
                            cy.intercept('**/Cart-AddProduct?quickViewAddToBag=true**').as('addToBag-requests');
                            categoryPage.getAddToBagBundleButtonModalPLP().dblclick();
                            cy.wait('@addToBag-requests');
                    });
                });
            });
            break;
        default:
            cy.log("Error! Selection not Defined.");
            break;
    }
});
