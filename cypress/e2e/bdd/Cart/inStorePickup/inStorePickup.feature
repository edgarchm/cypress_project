# /* *********************************************
#  * Page Object File Name: inStorePickup.feature
#  * ******************************************* */
@regression
Feature: Guest User is navigated to cart page with an available ship to me item in cart and verifying In Store Pickup is functional 

    # ########################### DONT USE #############################
    # Background: Guest User added an item to bag for Ship to Me
    # Given User navigated to PLP page
    # When User adds an item to bag
    # Then User confirms item has been added to bag
    # And User click go to bag button
    # ########################### END #################################
    @smoke @US @cart
    Scenario: Guest User navigates to bag to click In Store Pickup on product line item

        Given user on the cart page with an available ship to me item in cart
        When user clicks on Check Nearby Stores on product line item
        Then user should be navigated to In-Store Pickup Availability page and see Check Nearby Stores