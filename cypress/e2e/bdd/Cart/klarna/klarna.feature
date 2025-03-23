# /* *********************************************
#  * Page Object File Name: klarna.feature
#  * ******************************************* */
@regression
Feature: Guest User is navigated to cart page and with an available ship to me item in cart and confirms that Klarna learn more button functionality

    # ########################### DONT USE #############################
    # Background: Guest User added an item to bag for Ship to Me
    # Given User navigated to PLP page
    # When User adds an item to bag
    # Then User confirms item has been added to bag
    # And User click go to bag button
    # ########################### END #################################
@smoke @US @CA @cart
Scenario Outline: Guest User navigates to cart page with an available ship to me item in cart and clicks learn button for Klarna
       
        Given user on the cart page with an available ship to me item in cart
        When user clicks learn more link on "<learnMoreButton>" in cart
        Then user should be navigated to see "<learnMoreButton>" page

            Examples:

            | learnMoreButton |
            | Klarna          |

