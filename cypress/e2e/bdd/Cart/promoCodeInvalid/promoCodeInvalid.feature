# /* *********************************************
#  * Page Object File Name: promoCodeInvalid.feature
#  * ******************************************* */
@regression
Feature: Guest User is navigated to cart page with an available ship to me item in cart and enters an invalid promo code

    # ########################### DONT USE #############################
    # Background: Guest User added an item to bag for Ship to Me
    # Given User navigated to PLP page
    # When User adds an item to bag
    # Then User confirms item has been added to bag
    # And User click go to bag button
    # ########################### END #################################
    @smoke @US @CA @cart
    Scenario: Guest User navigates to bag to enter invalid promotion code

        Given user on the cart page with an available ship to me item in cart
        When user enters a coupon code that is not set up on any coupons   
        Then user should see the promo code invalid message