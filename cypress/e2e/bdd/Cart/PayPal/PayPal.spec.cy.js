import {
    Given,
    Then,
    When,
    And,
} from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from "../../common-step-definitions/common.spec";
import CommonSteps from "../../common-step-definitions/commonSteps.spec";
import CartPage from "../../../pageObjects/CartPage.po";
import { slowCypressDown } from "cypress-slow-down";
const commonActions = new CommonActions();
const cartPage = new CartPage();

/**********************************************   Feature   **************************************************
 
Guest User navigates to cart page with an available ship to me item in cart and clicks learn more button for PayPal
 
**************************************************   End    **************************************************/
When('user clicks PayPal learn more link in cart', () => {
    cartPage.getlearnmorePayPal()
        .its('0.contentDocument')
        
    .find('body')
    .find('script')
    .eq(1).invoke('attr','src').then((item)=>{
        cy.log(item);
        cy.request(item).as('mes');
       
    });
});
Then('user should verify that link is clickable', () => {
    cy.get('@mes').should((resp) => {
        expect(resp.status).to.eq(200)
    })
});
