/* *********************************************
 *  Page Object File Name: FindStorePage.po.js
 *  Initial Development By: Edgar Chavez
 *  Date: 20230202
 * ******************************************* */
class FindStore
{
    findStoreTitle(){
        return cy.get('.page-title');
    };

    findStoreZipCodeInput(){
        return cy.get('#store-postal-code');
    };

    findStoresButton(){
        return cy.get('.sb-button.sb-button--utility.btn-storelocator-search');
    };

    getFindStoreMapButton(){
        return cy.get('div[role="menubar"] div:nth-child(1)');
    }

    findStoreFail(){
        return cy.get('.text-center');
    };

    getFindResultsValue(){
        return cy.get('.location-count');
    };

    getFindResultsList(){
        return cy.get('.card-body');
    };

    getNoStoresFoundMessage(){
        return cy.get('.text-center.store-locator-no-results');
    }

    getStoreAddress(){
        return cy.get('.store-details-address').first();
    };

    findStoreClose(){
        return cy.get('button[aria-label="Close"]');
    };

    getSearchKeyText(){
        return cy.get('.search-key-text');
    }
}
export default FindStore;