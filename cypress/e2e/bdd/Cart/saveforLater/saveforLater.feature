# /* *********************************************
#  * Page Object File Name: saveforLater.feature
#  * ******************************************* */
@regression
Feature: Guest User is navigated to cart page with an available ship to me item in cart and wants to save for later

    # ########################### DONT USE #############################
    # Background: Guest User added an item to bag for Ship to Me
    # Given User navigated to PLP page
    # When User adds an item to bag
    # Then User confirms item has been added to bag
    # And User click go to bag button
    # ########################### END #################################

    @smoke @US @CA @cart
    Scenario: Guest User navigates to bag to Save for Later

        Given user on the cart page with an available ship to me item in cart
        When user clicks Save for Later button
        Then user should be navigated to Log In page