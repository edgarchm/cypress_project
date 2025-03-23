import { Given,Then, When,And } from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from "../common-step-definitions/common.spec";
import domains from "../../../fixtures/domains.json";
//import AddAddress from "../../../fixtures/AddAddress.json"
import LoginPage from "../../pageObjects/LoginPage.po";
import CreateAccount from "../../pageObjects/CreateAccountPage.po";
import pidType from "../common-step-definitions/enum";
import CommonSteps from "../common-step-definitions/commonSteps.spec";
import AddNewAddress from "../../pageObjects/AddNewAddressPage.po";

const loginPage = new LoginPage();
const addnewcard = new AddNewAddress();
const ca = new CommonActions();

When('User click on add new credit or debit card and enter the card number, month,year,CVV and click on save my credit info checkbox', ()=> {

    addnewcard.clickAddNewRadioBtn().click({force: true});
    ca.getIframeContents('iframe[id^="flex-microform-08"]').find('input').eq(1).should('exist').type('4556181463281301');
    addnewcard.selectMonth().select('10');
    addnewcard.selectYear().select('2031');
    addnewcard.enterCVV().type('123');
});

Then('User should able to see added new Credit or debit card details in Payment page', ()=> {
    addnewcard.nextReviewBtn().should('have.contain',"NEXT: REVIEW");
});