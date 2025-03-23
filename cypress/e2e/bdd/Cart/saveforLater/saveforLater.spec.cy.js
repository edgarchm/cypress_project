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

/**********************************************   Feature   **************************************************

Guest User is navigated to cart page with an available ship to me item in cart and wants to save for later

**************************************************   End    **************************************************/

//Given('user on the cart page with an available ship to me item in cart',() => {});

When('user clicks Save for Later button', () => {
  cartPage.getSaveforLater().click()
});
Then('user should be navigated to Log In page', () => {
  ca.navigateTo('login/');
});