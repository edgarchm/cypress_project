# /* *********************************************
#  * Page Object File Name: changeStore_GreenBanner.feature
#  * ******************************************* */
@regression @gb
Feature: Guest User is navigated to cart page with an available ship to me item in cart and navigates to green banner to check the availability in near by stores 

    # ########################### DONT USE #############################
    # Background: Guest User added an item to bag for Ship to Me
    # Given User navigated to PLP page
    # When User adds an item to bag
    # Then User confirms item has been added to bag
    # And User click go to bag button
    # ########################### END #################################
    @smoke @US @cart
    Scenario: Guest User navigates to bag to click Pickup at (store location) green banner

        Given user on the cart page with an available ship to me item in cart
        When user clicks on Pickup at store location green banner
        Then user should be navigated to Select a store page and see Check Nearby Stores