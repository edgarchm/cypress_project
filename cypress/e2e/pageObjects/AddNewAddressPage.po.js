class AddNewAddress {

    clickonAddNewAddress() {
        return cy.get('.shipment-selector-block > .btn')
    }
    enterFirstName() {
        return cy.get('#shippingFirstName');
    }
    enterLastName() {
        return cy.get('#shippingLastName');
    }
    enterShippingAddress() {
        return cy.get('#shippingAddressOne');
    }
    enterShippingAdresscity() {
        return cy.get('#shippingAddressCity');
    }
    selectState() {
        return cy.get('#shippingState');
    }
    entershippingZipCode() {
        return cy.get('#shippingZipCode');
    }
    enterPhonenumber() {
        return cy.get('#shippingPhoneNumber');
    }
    clickonAddAddress() {
        return cy.get('.add-address');
    }
    verifyAddAddress() {
        return cy.get('.selected > .form-check-label > .radio > .radio__label');
    }
    clickonUPSRadionBtn() {

        return cy.get('.row > :nth-child(1) > .shipping-method-options > .radio > .form-check-label > .radio__checkmark');    
    }
    
    clickonUSPSRadionBtn() {
        
        return cy.get(':nth-child(2) > .shipping-method-options > .radio > .form-check-label > .radio__checkmark');
    }
    verifyUPSValue() {
        return cy.get('#shippingMethod-UPSstandard');
    }
    verifyUSPSValue() {
        return cy.get('#shippingMethod-USPSstandard');
    }
    verifyselectedsavedaddress() {
        return cy.get('.form-check-label > .radio > .radio__checkmark');
    }
    clickonNextPayment() {
        return cy.get('.next-payment-button > .col-12 > .next-step-button > .button');
    }
    verifyPaymentpageTitle() {
        return cy.get('.message-title > h1');
    }
    verifySavedCardheader() {
        return cy.get('.saved-cc-info > label.radio__label > .radio__label');
    }
    clickonCVV() {
        return cy.get('#securityCode');
    }
    clickReviewBtn() {
        return cy.get('.submit-payment-container > .col-12 > .next-step-button > .button');
    }
    verifyReviewPageheader() {
        return cy.get('.shipping-summary-version > .card-title__group > .card-title__text');
    }
    clickAddNewRadioBtn() {
        return cy.get('.radio__label > .d-none');
    }
    enterCardNumber() {
         return cy.getIframeContents('iframe[id="flex-microform-08"]').find('input').eq(1).should('exist');
    }
    selectMonth() {
        return cy.get('#expirationMonth');
    }
    selectYear() {
        return cy.get('#expirationYear');
    }
    enterCVV() {
        return cy.get('#securityCode');
    }
    nextReviewBtn() {
        return cy.get('.submit-payment-container > .col-12 > .next-step-button > .button');
    }
    clickapplyGiftCardBtn() {
        return cy.get('.show-giftcard-form');
    }
    enterGiftCode() {
        return cy.get('#giftcardNumber');
    }
    enterGiftPin() {
        return cy.get('#pin');
    }
    clickonapply() {
        return cy.get('.col-4 > .btn-block');
    }
    appliedGiftcard() {
        return cy.get('.giftCardNo');
    }
    deliverydetails() {
        return cy.get('.shipping-summary-version > .card-title__group > .card-title__text');
    }
    paymentdetails() {
        return cy.get('.card-body > .card-title__group > .card-title__text');
    }
    shiptome() {
        return cy.get('.review-shipToMe-group > .card-title > .items-length');
    }
    clickonPlaceorderBtn() {
        return cy.get('.place-order')
    }
    verifyOrderConfirmationHeader() {
        return cy.get('.order-confirmation-msg > h4');
    }
}
export default AddNewAddress;