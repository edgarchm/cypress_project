import { Given,Then, When,And } from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from "../../common-step-definitions/common.spec";
import domains from "../../../../fixtures/domains.json";
import LoginPage from '../../../pageObjects/LoginPage.po';
import CreateAccount from "../../../pageObjects/CreateAccountPage.po";
import pidType from "../../common-step-definitions/enum";
import CommonSteps from "../../common-step-definitions/commonSteps.spec";
import common from "../../common-step-definitions/common.spec";
import Bopis from "../../../pageObjects/BopisPage.po";

const ca = new CommonActions();
const loginPage = new LoginPage();
const bopi = new Bopis();
const co = new common();

Given ('Authenticated user on the checkout review Page for instore Pickup', ()=>{
     ca.navigateTo(domains.domains.loginPage);
     cy.intercept('**CheckoutServices-Placeorder**').as('placeorder');
     cy.fixture('accounts').then(function (accounts) {
           let account = accounts["cosmoTemplate01"];
           cy.login(account);
           co.addProdct(co.getPID(pidType.BOPISPID), 1);
           co.navigateTo('/cart'); 
           ca.navigateToURL(domains.domains.paymentPage);
 });   
 }); 
When ('User able to see Instore Pickup details,Payment details,Instore Pickup items and place order',() =>{
     bopi.getCvvEnter().type('123');
     bopi.getReviewButton().click({force:true}); 
});
Then ('User should see place order page', () => {
     bopi.getReviewPage().should('be.visible');
     bopi.getPlaceOrder().should('be.visible');  
});

