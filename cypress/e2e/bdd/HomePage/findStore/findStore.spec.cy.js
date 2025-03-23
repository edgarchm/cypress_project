/* *********************************************
 *  Page Object File Name: findStore.spec.cy.js
 *  Initial Development By: Edgar Chavez
 *  Date: 20230202
 * ******************************************* */
import { Given, Then, When, And } from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from "../../common-step-definitions/common.spec";
import CommonSteps from "../../common-step-definitions/commonSteps.spec";
import FindStore from '../../../pageObjects/FindStorePage.po';
import domains from "../../../../fixtures/domains.json";
import customers from "../../../../fixtures/customers.json";

const ca = new CommonActions();
const findStorePage = new FindStore();

let zipCode='';

Given ('User at Sally Find a Store page', () =>{
    ca.navigateTo(domains.domains.findStorePage);
    cy.url().then((urlText)=>{
        if(urlText.includes('SA')){
            zipCode = customers.customers.usaPostalCode; //corporate Zip Code
        }else{
            zipCode = customers.customers.canadaPostalCode;
        };
    });
});

When ('User types a {string} Postal Code and clicks search button',(zipStatus) =>{
    switch(zipStatus){
        case "valid":
            findStorePage.findStoreZipCodeInput().clear().type(zipCode);
            break;
        case "invalid":
            findStorePage.findStoreZipCodeInput().clear().type('NoZip');
            break;
        default:
            cy.log('Error: Status not defined');
            break;
    };
    if((zipStatus==='valid')||(zipStatus==='invalid')){
        cy.intercept('**/Stores-FindStores?showMap**').as('findStores-requests');
            findStorePage.findStoresButton().click();
            cy.wait('@findStores-requests');
    }
});

Then ('Stores located in the {string} Postal Code area display',(zipStatus) =>{
    switch(zipStatus){
        case "valid":
            findStorePage.getFindStoreMapButton().should('be.visible').then(()=>{
                //
                findStorePage.getFindResultsValue().then((results)=>{
                    if(results.text().valueOf()>0){
                        findStorePage.getFindResultsList().then(() => {
                            findStorePage.getStoreAddress().then((storeAddress)=>{
                                expect(storeAddress.text()).to.contain(zipCode);
                            });
                        });
                    }else{
                        cy.log('No stores found!').should('be.true');
                    };
                });
            });
            break;
        case "invalid":
            cy.url().then((urlText)=>{
                if(urlText.includes('SA')){
                    findStorePage.getSearchKeyText().then((storeAddress)=>{
                        expect(storeAddress.text()).to.equal('NoZip');
                    });
                }else{
                    let textMessage = 'We\'re sorry, we couldn\'t find results for your search.'
                    findStorePage.getNoStoresFoundMessage().should('be.visible');
                    findStorePage.getNoStoresFoundMessage().then((message)=>{
                        expect(message.text()).to.equal(textMessage);
                    });
                };
            });
            break;
        default:
            cy.log('Error: Status not defined');
            break;
    }
});