import { Given, Then, When, And } from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from "../../common-step-definitions/common.spec";
import CommonSteps from "../../common-step-definitions/commonSteps.spec";
import ProductPage from "../../../pageObjects/ProductPage.po";

const productPage = new ProductPage();
const commonActions = new CommonActions();

Given ('I am guest user on a search results grid page',()=>{
    const auth = Cypress.env('auth');
commonActions.navigateTo('hair-color/shop-all-hair-color/', auth);
productPage.getProductTile().scrollIntoView().should('be.visible')
productPage.getQuickView().eq(1).click({force:true});
}); 


When ('I choose an available color from the color chooser modal of a product with color variations',()=>{
 
    productPage.getSelectHairColor().eq(0).click({force:true}).type('{enter}',{delay:800})
 
  
  productPage.getAddtoBagBtn().click({force:true})
}); 

//Then ('I should see the add to basket confirmation {string}',(alertMessage)=>{
//  productPage.getItemAddedToBagAlertPopMessage()
//  .should('contain.text',`${alertMessage}`);
//});