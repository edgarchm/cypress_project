# /* *********************************************
#  * Page Object File Name: promoCodeEmpty.feature
#  * ******************************************* */
@regression
Feature: Guest User is navigated to cart page with an available ship to me item in cart and enters an empty promo code 


    # ########################### DONT USE #############################
    # Background: Guest User added an item to bag for Ship to Me
    # Given User navigated to PLP page
    # When User adds an item to bag
    # Then User confirms item has been added to bag
    # And User click go to bag button
    # ########################### END #################################
    @smoke @US @CA @cart
    Scenario: Guest User navigates to bag to enter empty promotion code

        Given user on the cart page with an available ship to me item in cart
        When user enters empty promotion code
        Then user verifies pop up message displays "No coupon code entered"

