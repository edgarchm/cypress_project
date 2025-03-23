import { Given,Then, When,And } from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from "../../common-step-definitions/common.spec";
import domains from "../../../../fixtures/domains.json";
import LoginPage from '../../../pageObjects/LoginPage.po';
import CreateAccount from "../../../pageObjects/CreateAccountPage.po";
import pidType from "../../common-step-definitions/enum";
import CommonSteps from "../../common-step-definitions/commonSteps.spec";
import Bopis from "../../../pageObjects/BopisPage.po";

const ca = new CommonActions();
const loginPage = new LoginPage();
const bopi = new Bopis();

When ('User able to see saved Instore Pickup information ,contact information and click on Next:Payment',() => {
    bopi.getInstore().should('be.visible');
    bopi.getContactInformation().should('be.visible');
    bopi.getShippingPageVisible().should('be.visible');
    bopi.getPayment().click({force:true});
});
Then ('User should see Payment page section', () => {
    bopi.getPaymentPage().should('be.visible');
});