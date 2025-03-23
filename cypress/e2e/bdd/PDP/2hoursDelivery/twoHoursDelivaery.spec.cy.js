/* *********************************************
 *  Page Object File Name: twoHoursDelivery.spec.cy.js
 *  Initial Development By: Ulan Isaq
 *  Date: 20230214
 * ******************************************* */
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from "../../common-step-definitions/common.spec";
import guestData from "../../../../fixtures/guest.json";
import ProductDetailsPage from "../../../pageObjects/ProductPage.po";
import pidType from "../../common-step-definitions/enum";

const pdp = new ProductDetailsPage();
const com = new CommonActions();

// Scenario: Verify ability to enter address for 2-hours delivery eligible
let url;
Given(
    "a guest user is on the PDP for an individual product that is 2HD eligible",
    () => {
        url = com.getPID(pidType.INDIVID2HDELIGIBLE);
        cy.intercept("**/" + url).as("SD");
        // com.navigateTo(
        //   url
        // );
        com.getURLPath(url);
    }
);
When("user attempts to provide an address for 2 hours delivery", () => {
    cy.url().then((ur) => {
        if (!ur.includes("SC")) {
            cy.intercept("**/i?**").as("delivery");
            pdp.get2HDLabel()
                .click()
                .then(() => {
                    pdp.get2HDAddressInput()
                        .as("address")
                        .should("be.visible")
                        .then((e) => {
                            cy.wrap(e)
                                .type(guestData.guest.address.street)
                        });
                });
            pdp.get2HDCityInput().type(guestData.guest.address.city);
            pdp.get2HDZipInput().type(guestData.guest.address.zipCode);
            pdp.get2HDSelectState().select(guestData.guest.address.state);
            pdp.getConfirmationSubmit()
                .should("be.visible")
                .then(() => {
                    pdp.getConfirmationSubmit()
                        .click()
                        .then(() => {
                            cy.wait("@SD");
                            cy.wait("@delivery");
                        });
                });
        }
    });
});

Then(
    "user should see readiness for delivery for his address and his address displayed on the page",
    () => {
        cy.url().then((ur) => {
            if (!ur.includes("SC")) {
                pdp.get2HDAddressDisplay()
                    .should("be.visible")
                    .invoke("text")
                    .then(async (text) => {
                        let arr = text
                            .toString()
                            .trim()
                            .replaceAll("  ", "")
                            .replaceAll("\n", " ")
                            .split(" ");
                        let address = "";
                        await arr.forEach((e) => {
                            address += e.trim() + " ";
                        });
                        expect(address).not.to.be.a("null");
                        expect(address).not.to.be.an("undefined");
                        expect(address).to.contain(
                            guestData.guest.address.street
                        );
                        expect(address).to.contain(
                            guestData.guest.address.state
                        );
                    });
            }
        });
    }
);

// Scenario: Verify error message for entering address for that is not 2-hours delivery
Given(
    "a guest user is on the PDP for an individual product that is not 2HD eligible",
    () => {
        url = com.getPID(pidType.INDIVID2HDNOTELIGIBLEPID);
        // com.navigateTo(
        //   url
        // );

        com.getURLPath(url);
    }
);
When(
    "user attempts to provide an address for not eligible 2 hours delivery",
    () => {
        cy.log(typeof cy.url());

        cy.url().then((ur) => {
            cy.log(ur);
            if (!ur.includes("SC")) {
                pdp.get2HDLabel().click();
            }
        });
        // if(!cy.url().toString().includes('SC')){

        // }
    }
);
Then("user should see error message", () => {
    cy.url().then((ur) => {
        if (!ur.includes("SC")) {
            pdp.get2HDStatusDeliveryMessage()
                .invoke("text")
                .then((t) => {
                    expect(t.toString().trim()).to.equal("Not Eligible");
                });
        }
    });
});
