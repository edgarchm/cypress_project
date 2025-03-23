 /* *********************************************************
  * Page Object File Name: CartPage.po.js
  * *********************************************************/

 class CartPage{

    get2HrDlvryEntAddressBtn()
    {
        return cy.get('.sdd-enter-address > .clickable');
    }
    getAddressModal()
    {
        return cy.get('.address-modal-content');
    }
    getStoreLocationGreenBanner()
    {
        return cy.get('.your-store > div.delivery-message-text > .clickable');
    }
    getCheckNearbyStoresBtn()
    {
        return cy.get('.main-button');
    }
    getLoginModalbtn()
    {
        return cy.get('form[name="login-form"] > .btn.btn-block.btn-primary.checkout-button');
    }
    getCreatAccntModalbtn()
    {
        return cy.get('.card-body .btn-primary:nth-child(4)')
    }
    getCheckoutModalbtn()
    {
        return cy.get('.card-body > .checkout-button')
    }
    getDeletebtn()
    {
        return cy.get('.delete')
    }
    getRemoveProductModal()
    {
        return cy.get('#removeProductModal > .modal-dialog > .modal-content > .modal-body')
    }
    getrpmYESbtn()
    {
        return cy.get('#removeProductModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    }
    getrpmCancelbtn()
    {
        return cy.get('#removeProductModal > .modal-dialog > .modal-content > .modal-footer > .btn-outline-primary')
        //return cy.get('.btn-outline-primary')
    }          
    getEmptyBag()
    {
        return cy.get('.cart-page > :nth-child(1) > .col-12')
    }
    getProductNameintheCart()
    {
        return cy.get('.line-item-name > a')
    }
    getChechOutButton()
    {
        return cy.get('.check-out-button-anchor > .checkout-guest > #checkoutBtn')
    }
    getInStorePickupLink()
    {
        return cy.get('.instore-pickup-link')
    }
    getPromoCodeApplybtn()
    {
        return cy.get('.col-5 > .button')
    }
    getCouponErrorMssge()
    {
        return cy.get('.coupon-error')
    }
    getSaveforLater()
    {
        return cy.get('.add-to-save-for-later-list-cart')
    }
    getProductImage()
    {
        return cy.get('.product-image')
    }
    getProductName()
    {
        return cy.get('.line-item-name > a')
    }
    getProductSKU()
    {
        return cy.get('.line-item-partnumber > a')
    }
    getProductColorSelect()
    {
        return cy.get(':nth-child(1) > .swatch-circle-container > a > .color-value > .swatch_img_pdp')
    }
    getProductImageinsideCart()
    {
        return cy.get('.img-zoom-lens')
    }
    getProductNameinsideCart()
    {
        return cy.get('.jost-semi-bold-25-px > .product-name')
    }
    getProductSKUinsideCart()
    {
        return cy.get('.product-id')
    }
    getQuantityBox()
    {
        return cy.get('#quantity')
    }
    getCard()
    {
        return cy.get('.card')
    }
    getCartSummaryItems()
    {
        return cy.get('.total-cart-summary-items')
    }
    getqtybtnPlus()
    {
        return cy.get('.qty-btn-plus')
    }
    getqtybtnMinus()
    {
        return cy.get('.qty-btn-minus')
    }
    getgotoBagbtn()
    {
        return cy.get('.goto-bag-btn')
    }
    getaddtoBag()
    {
        return cy.get('.js-track-atb.add-to-cart.btn.btn-primary')
    }
    getproductLink()
    {
        return cy.get('.product-tile.d-flex a.link').first();
    }
    getselectedProduct()
    {
        return cy.get('[title] [data-attr-value="14V\/HL-V Extreme Hi Lift Cool Blonde"]')
    }
    getlearnmorePayPal()
    {
        return cy.get('iframe[title="PayPal Message 2"]')
    }
    getlearnmoreKlarna()
    {
        return cy.get('.col-lg-4 > .mb-3 > .col-12 > .kosm-cart > klarna-placement > [style="height: auto; width: 100%; display: inline-block;"]')
    }
 };

 export default CartPage;