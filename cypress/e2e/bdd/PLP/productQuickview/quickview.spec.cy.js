import { Given, Then, When, And } from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from "../../common-step-definitions/common.spec";
import CommonSteps from "../../common-step-definitions/commonSteps.spec";
import ProductPage from "../../../pageObjects/ProductPage.po";
import { slowCypressDown } from 'cypress-slow-down';

const productPage = new ProductPage();
const commonActions = new CommonActions();

Given ('I am a guest user on the search results grid page', ()=>{
    const auth = Cypress.env('auth');

commonActions.navigateTo('hair-color/shop-all-hair-color/', auth);
// cy.get('.sms-opt-in_popup__back-btn.js-sms-opt-in-popup-close-trigger').then($button =>{
//     if($button.is(':visible')){
//         cy.get('.sms-opt-in_popup__back-btn.js-sms-opt-in-popup-close-trigger').click();

//     } else{}
// })
productPage.getProductGridTile().trigger('mouse').should('be.visible')

}); 

When ('I open quickview on a product with size variations', ()=>{
    productPage.getQuickViewBtn().click({force:true});
}); 

Then ('I select and add the first available product to cart', ()=>{
    productPage.getSelectSizeAttr().should('be.visible').then((e)=>{
         cy.wrap(e).click({force:true}) //.type('{enter}',{delay:2000});
    })
    cy.get('.slick-current .zoom').find('img').should('have.attr', 'src'); // Site JS needs this image for modal, so need to wait for it
    productPage.getAddtoBagBtn().should('be.visible').then((e)=>{
        cy.wrap(e).click()
    });
   
});
 
Then ('I should see the add to basket confirmation {string}',(alertMessage)=>{
   productPage.getItemAddedToBagAlertPopMessage().invoke('text').then((text1)=>{
    expect(text1.trim()).to.equal(alertMessage);
   })
});