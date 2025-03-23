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

When ('User selects on Apply gift card and enter code and enter pin and click on Apply',() => {
  bopi.getApplyGiftcard().click({force:true});
  bopi.getEnterCode().type('5896290963505642');
  bopi.getEnterPin().type('8694');
  bopi.getApplyButton().click({force:true});
});
Then  ('User should see gift card applied in payment page section',() => {
  bopi.getHideGiftCard().should('be.visible');
});