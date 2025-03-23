import {
    Given,
    Then,
    When,
    And,
} from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from "../../common-step-definitions/common.spec";
import CommonSteps from "../../common-step-definitions/commonSteps.spec";
import CartPage from "../../../pageObjects/cartPage.po";
import { slowCypressDown } from "cypress-slow-down";
import data from "../../../../fixtures/products.json"
const commonActions = new CommonActions();
const cartPage = new CartPage();
let ca = new CommonActions();

/****************************   Feature   **************************************************
 * 
Guest User is navigated to cart page with an available ship to me item in cart and confirms 
that Product Image, Product Name and Product SKU are cliackable and will navigate to next page

 ****************************   End       ****************************************************/

//Given ('user on the cart page with an available ship to me item in cart', () =>{})


When('user clicks on {string} in cart', (productInfo) => {

    switch (productInfo) {
        case "Product Image":
            cartPage.getProductImage().click();
            break;
        case "Product Name":
            cartPage.getProductName().click();
            break;
        case "Product SKU":
            cartPage.getProductSKU().should('be.visible').then(() => {
                cy.intercept('**/i?**').as('productSKU');
                cartPage.getProductSKU().click();
                cy.wait('@productSKU');
            })
            break;

    }
})

Then('user should be navigated to inside the cart with selected {string} displayed', (productInfo) => {

    switch (productInfo) {
        case "Product Image":
            cy.get('#sliderNav0 .slick-active').each((el)=>{
                let indexElement;
                cy.wrap(el).click().invoke("attr", ".slick-track").then((i)=>{
                    indexElement = i;
                })
            })
            
            break;
        case "Product Name":
            cartPage.getProductNameinsideCart()
                .should('be.visible')

            break;
        case "Product SKU":
            cartPage.getProductSKUinsideCart()
                .should('be.visible')

            break;

    }
})