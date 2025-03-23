class ProductPage
{

	getInStorePickUpCHeckBox(){
        return cy.get(".col-sm-12 > .row > :nth-child(1) > a > .filter__wrapper > div > input");
    };

    getEachProductItemElement(){
        return cy.get("#product-grid-search > div");
    };

    getSBSNumberOnConfirmation(){
        return cy.get(".add-alert-unit-item");
    };

    getSelectSizeTab(){
        return cy.get(".attribute button.select-webSize");
    }
    getProductId(){
        return cy.get(".product-id");
    };

    getAddToBag(){
        return cy.get(".js-track-atb");
    };

    getPlusIncreaseButton(){
        return cy.get("button#plus-btn");
    };

    getQuantity(){
        return cy.get("#quantity-select")
    };

    getAlertQuantity(){
        return cy.get(".add-alert-qty");
    };

    getListOfColorVariations(){
        return cy.get("div.attribute.swatch-container.swatch-slider > div");
    };

    get2HDLabel(){
		return  cy.get(" div > div.bopis-and-og-container > div > div:nth-child(2) > label");
    };

    get2HDAddressInput(){
		return cy.get("#address1");
	};

    get2HDCityInput(){
		return cy.get("#city");
	};

    get2HDZipInput(){
		return cy.get("#zipCode");
	};

	get2HDSelectState(){
		return cy.get("select#state");
	};

	getConfirmationSubmit(){
		return cy.contains("Confirm Address");
	};

	get2HDAddressDisplay(){
		return cy.get(" div.delivery-address.col-12 > div");
	};

	get2HDStatusDeliveryMessage(){
		return cy.get("div.sdd-enter-address.secondary-label-content > span");
	};

    loginTitle(){
        return cy.get('div > h3.login-title');
    };

    getProductGridTile(){
        return cy.get('[data-monetate-pid="ION101"]');
    };

    getProductTile(){
        return cy.get('[data-tile-position="1\.0"]');
    };

    getQuickViewBtn(){
        return cy.get('[data-monetate-pid="ION101"] [title="QuickView"]');
    };

    getQuickView(){
        // return cy.get('[data-monetate-pid="ION87"] [title="QuickView"]');
        return cy.get('.product-grid-tile [title="QuickView"]')
    };

    getSelectSizeAttr(){
        return cy.get('.attribute .js-variation-selector:nth-of-type(1)');
    };

    getSelectHairColor(){
        // return cy.get('[title] [data-attr-value="14V\/HL-V Extreme Hi Lift Cool Blonde"]');
        return cy.get('.attribute .swatch-line .swatch-circle-container a')
    };

    getAddToBagButtonPDP(){
        return cy.get('.js-track-atb.add-to-cart.btn.btn-primary',{timeout:60000});
    };

        getAddtoBagBtn(){
        return cy.get('.wrapper > .row > .col-sm-12 > .add-to-cart-global');
    };

    getItemAddedToBagAlertPopMessage(){
        return cy.get('.row.add-alert-title');
    };

    getChooseColor(){
        return cy.get('[class="swatch-circle-container"]');
    };

    getAddAllToBagButton(){
        return cy.get('button[data-pid="ULTBUND"]').eq(1);
    };

    getHeartIcon(){
        return cy.get('a.add-to-wish-list .favorite-icon');
    };

    getListOfImageGallery(){
        return cy.get("#sliderNav0 .slick-active");
    };

    getImageZoom(){
        return cy.get('#slider0 .slick-current');
    };

    getListOfSocialMediaLabels(){
        return cy.get('div.social-outer-container.hidden-sm-down > div > span > a');
    };

    getSendToFriendMailModel(){
        return cy.get('#sendToFriendModel .modal-content');
    };

    getCity(){
        return cy.get('#city');
    }

    getBrandLink(){
        return cy.get(".row .product-info .dropdown-content h5 a");
        // .row .product-info .dropdown-content  h5 a
    }

    getKlarnaButton(){
        return cy.get('.kosm-pdp > klarna-placement > [style="height: auto; width: 100%; display: inline-block;"]');
    }

    getKlarnaTab(){
        return cy.get('klarna-osm-interstitial');
    }

    getStarsRow(){
        return cy.get(".dropdown-content a[href*='#yotpo-reviews-top-div']");
    }

    getReviewSection(){
        return cy.get(".yotpo-display-wrapper ul");
    }

    getYouMayAlsoNeedSection(){
        return  cy.get('div.recommendations > div > div.recommendations-carousel-heading-yman');
    }

    getListOfProductGrid(){
        return cy.get('#product-grid-search > div');
    }
    getFirstColorAvailableOption(){
        return cy.get('.swatch-line > .swatch-circle-container > a > .color-value > .swatch_img_pdp').not('.unselectable');
    }
}
export default ProductPage;