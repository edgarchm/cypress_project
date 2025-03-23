# /* *********************************************
#  * Page Object File Name: quantityChange.feature
#  * ******************************************* */
@regression
Feature: Guest User is navigated to cart page and types the quantity in the box and verifies that quantity changes


    # ########################### DONT USE #############################
    # Background: Guest User added an item to bag for Ship to Me
    # Given User navigated to PLP page
    # When User adds an item to bag
    # Then User confirms item has been added to bag
    # And User click go to bag button
    # ########################### END #################################


 @smoke @US @CA @cart
 Scenario Outline: Guest User navigates to bag to decreases and increases the quantity

        Given user on the cart page with an available ship to me more than 1 item in cart
        When user clicks "<changeNumber>" button to change quantity
        Then user verifies item quantity has "<changeNumber>"

        Examples:
            | changeNumber |
            | increase     |
            | decrease     |



