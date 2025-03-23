# /* *********************************************
#  * Page Object File Name: PayPal.feature
#  * ******************************************* */
@regression
Feature: Guest User is navigated to cart page and with an available ship to me item in cart and confirms that PayPal learn more button functionality

    # ########################### DONT USE #############################
    # Background: Guest User added an item to bag for Ship to Me
    # Given User navigated to PLP page
    # When User adds an item to bag
    # Then User confirms item has been added to bag
    # And User click go to bag button
    # ########################### END #################################
@smoke @US @CA @cart
Scenario: Guest User navigates to cart page with an available ship to me item in cart and clicks learn more button for PayPal
       
        Given user on the cart page with an available ship to me item in cart
        When user clicks PayPal learn more link in cart
        Then user should verify that link is clickable

           

