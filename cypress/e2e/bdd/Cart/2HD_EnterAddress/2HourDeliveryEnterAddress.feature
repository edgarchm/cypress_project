#  * *********************************************************
#  * Page Object File Name: 2HourDeliveryEnterAddress.feature
#  * ********************************************************* 

@regression @2hd 
Feature: Guest User is navigated to cart page with an available ship to me item in cart and verifying 2-Hour Delivery is functional 

    @smoke @US @cart
    Scenario: Guest User navigates to bag to click 2-Hour Delivery to enter address

        Given user on the cart page with an available ship to me item in cart
        When user clicks on 2-Hour Delivery to enter address
        Then user verifies that pop up message displays Delivery Address to confirm address