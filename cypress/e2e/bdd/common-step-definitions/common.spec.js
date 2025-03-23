/* *********************************************
 *  Page Object File Name: common.spec..js
 *  Initial Development By: Edgar Chavez
 *                          Ulugbek Iskanadzhiev
 *                          and Hajymyrat Atayev
 *  Date: 20230202
 * *********************************************
 *  For Common Actions shared by several specs
 *********************************************** */
import FindStore from "../../pageObjects/FindStorePage.po";
import LoginPage from "../../pageObjects/LoginPage.po";
import CreateAccountPage from "../../pageObjects/CreateAccountPage.po";
import HomePage from "../../pageObjects/HomePage.po";
import CategoryPage from "../../pageObjects/CategoryPage.po";

import domains from "../../../fixtures/domains.json";
import authData from "../../../fixtures/authHeaders.json";
import products from "../../../fixtures/products.json";

const findStorePage = new FindStore();
const loginPage = new LoginPage();
const createAccountPage = new CreateAccountPage();
const homePage = new HomePage();
const categoryPage = new CategoryPage();
let authorizationKey = "Basic c3RvcmVmcm9udDokYWxseTIwMjFCZWF1dHk=";

class CommonActions {
    constructor() {
        self = this;

        //Navigate to a specific path in the URL Domain
        this.navigateTo = (addressPath) => {
            cy.visit(Cypress.env("sally_home") + addressPath, {
                headers: {
                    authorization: authorizationKey,
                },
                onBeforeLoad: () => {
                    window.localStorage.setItem(
                        "lastSmsOptInPopupDate",
                        new Date()
                    );
                },
                failOnStatusCode: true,
            });

            this.navigateToURL = (addressPath) => {
            cy.log("on/demandware.store/Sites-" + Cypress.env("siteID") + "-Site/default/" + addressPath)
           cy.visit("on/demandware.store/Sites-" + Cypress.env("siteID") + "-Site/default/" + addressPath, {
                 headers: { 
                authorization: authorizationKey
                  },
                 onBeforeLoad: () => {
                 window.localStorage.setItem('lastSmsOptInPopupDate', new Date());
                },
                 failOnStatusCode: true
              });
                   };
        };
        this.addProdct = (pid, quantity) => {
            let authorizationKey = "Basic c3RvcmVmcm9udDokYWxseTIwMjFCZWF1dHk=";
            return cy.request({
                method: 'POST',
                url: '/on/demandware.store/Sites-' + Cypress.env("siteID") + '-Site/default/Cart-AddProduct',
                headers: {
                    authorization: authorizationKey,
                },
                form: true,
                body: {
                    pid: pid,
                    quantity: quantity,
                    actionField: 'PDP'        },
            })
        }
        this.getURLPath = (pid) => {
            cy.visit(
                "on/demandware.store/Sites-" +
                    Cypress.env("siteID") +
                    "-Site/default/Product-Show?pid=" +
                    pid,
                {
                    headers: {
                        authorization:
                            authData.authHeaders.headers.authorization,
                    },
                    onBeforeLoad: () => {
                        window.localStorage.setItem(
                            "lastSmsOptInPopupDate",
                            new Date()
                        );
                    },
                    failOnStatusCode: true,
                }
            );
        };
     
        let url;
        this.getPID = (pidType) => {
            try{
                url = products[pidType][`${Cypress.env("siteID")}`][0].pid1;
                cy.log(url)
            }
           catch(error){
            console.error(error);
           }
            return url;
        };

        //Generates random Email Address
        this.generateEmailAddress = () => {
            return "autotest-" + Date.now() + "@sallybeauty.com";
        };

        this.getGridPLPPage = () => {
            if (Cypress.env("sally_home").includes("SA")) {
                return categoryPage.getColorItemInGridPLP().eq(0).click();
            } else if (Cypress.env("sally_home").includes("SC")) {
                return categoryPage.getColorItemInGridPLP().eq(1).click();
            }
        };

        //Generate Random Valid Phone Number
        this.generatePhoneNumber = () => {
            let phonePattern =
                /^\(?([2-9][0-8][0-9])\)?[\-\. ]?([2-9][0-9]{2})[\-\. ]?([0-9]{4})(\s*x[0-9]+)?$/;
            let phoneNumber = 0;
            let validNumber = true;

            while (validNumber) {
                phoneNumber =
                    Math.floor(Math.random() * 9000000000) + 1000000000;
                if (phonePattern.test(phoneNumber)) {
                    validNumber = false;
                }
            }
            return phoneNumber;
        };

        this.getFirstFilteringLocator = () => {
            return Cypress.$(".filter__wrapper [id*=filterCheckmark]")
                .first()
                .attr("id");
        };

        //Select filter option from PLP left frame
        this.selectFilterOptionPLP = (filteringSelection) => {
            switch (filteringSelection) {
                case "Brand":
                    categoryPage.getFirstBrandFilter().click();
                    break;
                case "Product Type":
                    categoryPage.getFirstProductTypeFilter().click();
                    break;
                case "Price":
                    categoryPage.getFirstByPriceFilter().click();
                    break;
                case "Promotion":
                    categoryPage.getPromotionFilter().click();
                    break;
                case "Benefits":
                    categoryPage.getBenefitsFilter().click();
                    break;
                case "Color":
                    categoryPage.getFirstByColorFilter().click();
                    break;
                case "Clearance":
                    categoryPage.getClearanceFilter().click();
                    break;
                default:
                    cy.log("Filtering Option not defined!");
            }
        };

        //Clicks a button
        this.clickButton = (buttonName) => {
            switch (buttonName) {
                case "Find Nearby Stores":
                    findStorePage.findStoresButton().click();
                    break;
                case "Create Account":
                    loginPage.getCreateAcctountButton().click();
                    break;
                default:
                    cy.log("Error: Cannot Find Button");
            }
        };

        //Unchecks a checkbox
        this.uncheckCheckBox = (checkBoxName) => {
            switch (checkBoxName) {
                case "Join Sally Beauty Rewards":
                    createAccountPage.joinSallyRewardsCheckbox().click();
                    break;
                default:
                    cy.log("Error: Cannot Find CheckBox");
            }
        };

        //Validates title text
        this.validateTitle = (titleText) => {
            switch (titleText) {
                case "Find Nearby Stores":
                    findStorePage
                        .findStoreTitle()
                        .should("contain.text", `${titleText}`);
                    break;
                case "Create an Account":
                    createAccountPage
                        .createAccountTitle()
                        .should("contain.text", `${titleText}`);
                    break;
                default:
                    cy.log("Error: Cannot Find Text");
            }
        };

        // Close the SMS request popup
        this.closeSMSRequestPopUp = () => {
            homePage.getNoThanksSMSRequestPopUp().then(($button) => {
                if ($button.is(":visible")) {
                    homePage.getNoThanksSMSRequestPopUp().click();
                } else {
                }
            });
        };

        this.getIframeContents = (elementLocator) => {
              return cy.get(elementLocator).its('0.contentDocument').should('exist').its('body').should('not.be.undefined').then(cy.wrap);
        };
    }

}
export default CommonActions;
