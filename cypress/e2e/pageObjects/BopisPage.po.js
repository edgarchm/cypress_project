class Bopis
{
getInstore() {
   return cy.get('.selected-store-msg')
} 
getContactInformation(){
   return cy.get('.instore-pickup-contact-info')
}
getPayment(){
   return cy.get('.next-payment-button > .col-12 > .next-step-button > .button')
}
getBopisClick(){
   return cy.get('.available-pickup > .custom-radio-input > .custom-radio-label')
}
getPaymentPage(){
   return cy.get('.payment-component')
}
getCvvEnter() {
   return cy.get('#securityCode')
}
getReviewButton(){
   return cy.get('.submit-payment-container > .col-12 > .next-step-button > .button')
}
getReviewPage(){
   return cy.get('.orderReview-summary')
}
getRadiobuttondebit(){
   return cy.get('.radio__label > .d-none')
}
getDebitCardNumber(){
   return cy.get('#cardNumber-container')
}
getMonth(){
   return cy.get('#expirationMonth')
}
getYear(){
   return cy.get('#expirationYear')
}
getShippingPageVisible(){
   return cy.get('.shipping-form')
}
getApplyGiftcard(){
   return cy.get('.show-giftcard-form')
}
getEnterCode(){
   return cy.get('#giftcardNumber')
}
getEnterPin(){
   return cy.get('#pin')
 }
getApplyButton(){
   return cy.get('.col-4 > .btn-block')
 }
getGiftCardPaymentDetails(){
   return cy.get('.payment-summary > .card-body')
}  
getClickOnBopis(){
   return cy.get('.available-pickup > .custom-radio-input > .custom-radio-label')
}
getPlaceOrder(){
   return cy.get('.place-order')
}
getOrderConfirmationPage(){
   return cy.get('.order-confirmation-msg')
}
getOrderText(){
   return cy.get('.order-confirmation-msg > h4')
}
getHideGiftCard(){
   return cy.get('.payment-component > .card-body')
}
}
export default Bopis