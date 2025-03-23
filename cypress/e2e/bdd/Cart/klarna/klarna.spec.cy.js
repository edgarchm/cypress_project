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

Guest User is navigated to cart page and with an available ship to me item in cart and 
confirms that Klarna learn more button functionality

**************************************************   End    **************************************************/


//Given('user on the cart page with an available ship to me item in cart',() => {});

        When ('user clicks learn more link on {string} in cart',(learnMoreButton) => {
          switch (learnMoreButton) {
          
            case "Klarna":
              cartPage.getlearnmoreKlarna()
              .shadow().find('button').click()
              break;
          }
        }); 
        Then ('user should be navigated to see {string} page',(learnMoreButton) => {
          switch (learnMoreButton) {
              case "Klarna":
                cy.get('klarna-osm-interstitial').shadow()
                .find('#klarna-osm-learn-more')
                .find('#learn-more-dialog-default-default__container-wrapper').should('be.visible')
              break;
          }
        }); 