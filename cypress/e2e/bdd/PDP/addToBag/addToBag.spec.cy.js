/// <reference types="Cypress" />
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import ProductDetailsPage from "../../../pageObjects/ProductPage.po";
import CommonActions from "../../common-step-definitions/common.spec";
import products from "../../../../fixtures/products.json";
import pidType from "../../common-step-definitions/enum";

const pdp = new ProductDetailsPage();
const com = new CommonActions();

Then("a user gets confirmation tab", async () => {
    let count1 = 0;
    let arrPID = [];

    pdp.getProductId()
        .each(() => {
            count1++;
        })
        .then(async () => {
            for (let index = 0; index < count1; index++) {
                await pdp
                    .getProductId()
                    .eq(index)
                    .then((e) => {
                        arrPID.push(e.text().trim());
                    });
            }
        });
    pdp.getQuantity()
        .as("quantity")
        .should("be.visible")
        .then(() => {
            cy.wait("@SBS1").then(() => {
                cy.get("@quantity")
                    .invoke("attr", "min")
                    .then((min) => {
                        alertQTY = parseInt(min);
                    });
            });
        });

    let sbsOnConfirmation = [];
    let count2 = 0;
    cy.get('.slick-current .zoom').find('img').should('have.attr', 'src'); // Site JS needs this image for modal, so need to wait for it
    if (
        url === products.bundledURLPID.SC[0].pid1 ||
        url === products.bundledURLPID.SA[0].pid1
    ) {
        pdp.getAddAllToBagButton().click();
    } else {
        pdp.getAddToBag()
            .as("addToBag")
            .should("be.visible")
            .then(() => {
                cy.intercept("**i?**").as("item");
                cy.get("@addToBag", { timeout: 700 })
                    .click({ force: true })
                    .click({ force: true })
                    .type("{enter}");
                cy.wait("@item");
            });
    }

    pdp.getSBSNumberOnConfirmation()
        .as("num")
        .should("be.visible")
        .then(() => {
            cy.get("@num")
                .each(() => {
                    count2++;
                })
                .then(() => {
                    for (let i = 0; i < count2; i++) {
                        cy.get("@num")
                            .eq(i)
                            .then((e) => {
                                let sbsText = e.text();
                                sbsOnConfirmation.push(
                                    sbsText.substring(
                                        sbsText.indexOf("SBS"),
                                        sbsText.length
                                    )
                                );
                            });
                    }
                })
                .then(() => {
                    setTimeout(() => {
                        expect(sbsOnConfirmation).to.include.members(arrPID);
                    }, 100);
                });
        });

    pdp.getAlertQuantity().then((e) => {
        if (url === com.getPID(pidType.QTYVARIATIONPID)) {
            setTimeout(() => {
                expect(
                    alertQTY + 1,
                    "SMTH wrong with quantity scenario"
                ).to.be.equal(parseInt(e.text().trim()));
            }, 100);
        }
    });
});
let url;
Given("a guest user on a PDP with size variation product", () => {
    url = com.getPID(pidType.SIZEVARIATIONPID);
    cy.intercept("**" + url + "**").as("SBS1");
    com.getURLPath(url);
});

When("user select the first available size and adds to basket", () => {
    pdp.getSelectSizeTab()
        .first()
        .should("be.visible")
        .then(() => {
            cy.intercept("**/" + url).as("SBS1");
            pdp.getSelectSizeTab().then((e) => {
                cy.wrap(e)
                    .first()
                    .click({ force: true })
                    .dblclick()
                    .type("{enter}", 100);
            });
        });
});

// Scenario: Verify add to basket confirmation when a user able to update the qty of product on the product details page
Given(
    "a guest user with quantity variation of product on the product details page",
    () => {
        url = com.getPID(pidType.QTYVARIATIONPID);
        cy.intercept("**" + url + "**").as("SBS1");
        com.getURLPath(url);
    }
);
let alertQTY;
When("user increases the quantity of product then adds to cart", () => {
    cy.wait("@SBS1").then(() => {
        cy.intercept("**i?**").as("qty");
        pdp.getPlusIncreaseButton()
            .should("be.visible")
            .then(() => {
                pdp.getPlusIncreaseButton()
                    .click({ force: true })
                    .type("{enter}", 700);
                cy.wait("@qty");
            });
    });
});

Given("a guest user on a PDP with color variation product", () => {
    url = com.getPID(pidType.COLORVARIATIONPID);
    cy.intercept("**" + url + "**").as("SBS1");
    com.getURLPath(url);
});
let num = 0;
When("user select the first available color and adds to basket", () => {
    cy.wait("@SBS1").then(() => {
        pdp.getListOfColorVariations()
            .each(() => {
                num++;
            })
            .then(() => {
                expect(num).to.be.above(1, "why its failed?"); // find another approach to handle wait issue
                for (let k = 0; k < 1.5; k++) {
                    pdp.getListOfColorVariations()
                        .eq(k)
                        .should("be.visible")
                        .then((e) => {
                            cy.wrap(e).first().click({ multiple: true }); // implement later on the method which clicks color only if its available
                        });
                }
            });
    });
});

Given(
    "a guest user is on the PDP page for an indiviual product and adds to basket",
    () => {
        url = com.getPID(pidType.INDIVIDPID);
        cy.intercept("**" + url + "**").as("SBS1");
        com.getURLPath(url);
        cy.wait("@SBS1");
    }
);

Given("Guest user on a bundled product PDP page and adds to basket", () => {
    url = com.getPID(pidType.BUNDLEDURLPID);
    cy.intercept("**" + url + "**").as("SBS1");
    com.getURLPath(url);
});
