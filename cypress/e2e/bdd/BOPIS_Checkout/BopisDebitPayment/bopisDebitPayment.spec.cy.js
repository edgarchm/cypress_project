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

When ('User selects a saved debit or credit card details and enter CVV number and click on Next:Review',() => {
    bopi.getCvvEnter().type('123');
    bopi.getReviewButton().click({force:true});
});
Then ('User should see checkout review section', () => {
    bopi.getReviewPage().should('be.visible');    
});