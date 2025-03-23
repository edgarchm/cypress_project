/* *********************************************
 *  Page Object File Name: CategoryPage.po.js
 *  Initial Development By: Edgar Chavez
 *  Date: 20230202
 * ******************************************* */
class CategoryPage
{
    getProductCategoryTitle(productCategory){
        switch(productCategory){
            case "Hair Color":
            case "Hair Care":
            case "Tools & Brushes":
            case "Nails":
                return cy.get('h1[class="landing_heading"]');
                break;
            case "Beauty":
                return cy.get('section[class="new-beauty hw-container py-3"] h2[class="landing_heading"]');
                break;
            case "Salon Supplies":
                return cy.get('body > div:nth-child(39) > div:nth-child(6) > section:nth-child(3) > div:nth-child(1) > h1:nth-child(1)');
                break;
            default:
                cy.log('Error! Undefined Option.')
        };
    };

    getAllProductCategoryTitle(){
        return cy.get('.header.page-title');
    };

    getFirstProductInPLP(){
        return cy.get('.product-tile.d-flex').first();
    };

    getColorItemInGridPLP(){
        return cy.get('.select2custom-selection');
    };

    getFirstColorItemInGridPLP(){
        return cy.get('.select2custom-selection').first();
    };

    getSecondColorItemInGridPLP(){
        return cy.get('.select2custom-selection').eq(1);
    }

    getFirstOptionFromModalChooserPLP(){
        return cy.get('.select2custom-results__option').first();
    };

    getAddToBagButtonModalPLP(){
        return cy.get('.plp-modal-add-to-bag');
    };

    getFirstItemInSwatchLane(){
        return cy.get('body > div:nth-child(39) > div:nth-child(6) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(9) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)');
    };

    getOptionSelectorDropdownInPDP(){
        return cy.get('span[role="combobox"]');
    };

    getFirstOptionSelectorDropdownInPDP(){
        return cy.get('body > span:nth-child(65) > span:nth-child(1) > span:nth-child(3) > ul:nth-child(1) > li:nth-child(1)');
    };

    getFirstProductSizeOption(){
        return cy.get('[class="select-webSize js-variation-selector  "]').first();
    };

    getPLPProductGrid(){
        return cy.get('[class$="product-grid-tile"]');
    }

    getAddToBagFirstProductPLP(){
        return cy.get('#product-grid-cat > div:nth-child(1) > div > div > div > div > div.tile-grid-item.align-self-center.tile-button-ctnr.px-0 > div > div > button').first();
    };

    getQuickViewPLPButton(){
        return cy.get('a.quickview.hidden-sm-down.button.button--secondary').first();
    }

    getPLPModalWindow(){
        return cy.get('#quickViewModal');
    }

    getSizeModalPLPButton(){
        return cy.get('.select-webSize.js-variation-selector').first();
    }

    getAddToBagSizeButtonModalPLP(){
         return cy.get('.wrapper > .row > .col-sm-12 > .add-to-cart-global');
        //   return cy.get('[class$="add-to-cart-global btn btn-primary "]');
    };

    getAddToBagBundleButtonModalPLP(){

        //  return cy.get('wrapper > .row .add-to-cart-global');
          return cy.get('.js-track-atb.add-to-cart-global.btn.btn-primary.set');
    };

    getItemAddedToBagAlertModalPresent(){
        return cy.get('div[role="alert"]');
    };

    getItemAddedToBagAlertPopMessage(){
        return cy.get('.row.add-alert-title');
    };

    getContinueShoppingButton(){
        return cy.get('.continue-shopping-btn');
    };

    getSortByDropDown(){
        return cy.get('#sort-order');
    };

    //Filtering controls
    getProductFilteringType(){
        return cy.get('.js-clear-all.filter-value.js-filter-value.filter-bar-item').invoke('attr','data-filter-type');
    };
    getClearAllButton(){
        return cy.get('a[class="reset btn btn--small"]');
    };
    getFirstBrandFilter(){
        return cy.xpath('(//li[starts-with(@title,"Refine by Brand:")])[1]');
    };
    getFirstProductTypeFilter(){
        return cy.xpath('(//li[starts-with(@title,"Refine by Product Type:")])[1]');
    };
    getFirstByPriceFilter(){
        return cy.get('li[title="Refine by Price: $0 - $5"] div div[class="pr-1"]');
    };
    getPromotionFilter(){
        return cy.xpath('(//li[starts-with(@title,"Refine by Promotion:")])[1]');
    };

    getBenefitsFilter(){
        return cy.xpath('(//li[starts-with(@title,"Refine by Benefits:")])[1]');
    };
    getFirstByColorFilter(){
        return cy.get('li[title="Refine by Color: Red"] div[class="pr-1"] div[class="pr-1"]');
    };
    getClearanceFilter(){
        return cy.get('label[for="filterCheckmark-Clearance"]');
    };
    getLoadMoreButton(){
        return cy.get('.btn.button.button--secondary.col-12.col-sm-5.col-lg-3');
    };
    getColorItemInGridPLP(){
        return cy.get('.select2custom-selection');
    };
    getFirstOptionFromModalChooserPLP(){
        return cy.get('.select2custom-results__option').first();
    }
};
export default CategoryPage;