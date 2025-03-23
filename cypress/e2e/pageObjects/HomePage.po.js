/* *********************************************
 *  Page Object File Name: HomePage.po.js
 *  Date: 20230202
 * ******************************************* */
class HomePage
{
    getNavIcon(){
        return cy.get('.nav-account-info-icon');
    };
    getUsername(){
        return cy.get('#login-form-email');
    };
    getPassword(){
        return  cy.get('#login-form-password');
    };
    getEntrepreneaur(){
        return cy.get('#inlineRadio3');
    };
    getShopTab(){
        return  cy.get(':nth-child(2) > .nav-link');
    };
    getSearchInput(){
        return cy.get('div[class="search hidden-sm-down"] input[placeholder="Search"]');
    };
    getSearchFirstItemListed(){
        return cy.get('div[class="col-xs-12 col-sm-10"] a');
    }

    //Top Marquee Options
    findStoreLink(){
        return cy.get('a[title="Find a store"]');
    };
    logInSignUpLink(){
        return cy.get('a[class="login"]');
    };

    //Main Menu Options
    getProductsMainMenuHairColor(){
        return cy.get('a[id="hair-color"] span[class="nav-menu-name"]');
    };
    getProductsMainMenuHairCare(){
        return cy.get('a[id="Hair"] span[class="nav-menu-name"]');
    };
    getProductsMainMenuToolsAndBrushes(){
        return cy.get('a[id="tools-and-brushes"] span[class="nav-menu-name"]');
    };
    getProductsMainMenuNails(){
        return cy.get('a[id="Nail"] span[class="nav-menu-name"]');
    };
    getProductsMainMenuBeauty(){
        return cy.get('a[id="beauty"] span[class="nav-menu-name"]');
    };
    getProductsMainMenuSalonSupplies(){
        return cy.get('a[id="equipment-and-furniture"] span[class="nav-menu-name"]');
    };

    //Products listed in HomePage
    getFirstTrendingProductInList(){
        return cy.get('section[id="rz_trending"] li:nth-child(1)');
    };

    //SMS Request Pop Up
    getNoThanksSMSRequestPopUp(){
        return cy.get('.sms-opt-in_popup__back-btn.js-sms-opt-in-popup-close-trigger');
    };

    //Floating Menu Options
    getDealsMenu(){
        return cy.get('#redirect-deals');
    };
    getHairColorMenu(){
        return cy.get('#hair-color');
    };
    getHairCareMenu(){
        return cy.get('#Hair');
    };
    getToolsAndBrushesMenu(){
        return cy.get('#tools-and-brushes');
    };
    getNailsMenu(){
        return cy.get('#Nail');
    };
    getBeautyMenu(){
        return cy.get('#beauty');
    };
    getListOfNavMenu(){
        return cy.get("ul.nav.navbar-nav.navbar-menu > li");
    };
    getListOfShopByCategories(){
        return  cy.get('#vn_cat_box > li');
    };
    getNextArrow(){
        return cy.get("#vn_cat > .cat-grid_slider > .arrow-next > .nextArrow");
    };
    getPrevArrow(){
        return cy.get("#vn_cat > .cat-grid_slider > .arrow-prev > .prevArrow");
    };

    getSimpleSearch(){
        return  cy.get('form[name*="simpleSearch"]');
    }
}
export default HomePage;