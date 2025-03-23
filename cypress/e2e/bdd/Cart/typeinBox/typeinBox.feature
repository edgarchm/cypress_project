# /* *********************************************
#  * Page Object File Name: typeinBox.feature
#  * ******************************************* */
@regression
Feature: Guest User is navigated to cart page with an available ship to me items in cart, then types number in the box to verify item number changes accordingly

    # ########################### DONT USE #############################
    # Background: Guest User added an item to bag for Ship to Me
    # Given User navigated to PLP page
    # When User adds an item to bag
    # Then User confirms item has been added to bag
    # And User click go to bag button
    # ########################### END #################################
    @smoke @US @CA @cart
    Scenario Outline: Guest User navigates to bag to type the quantity
       
        Given user on the cart page with an available ship to me item in cart
        When user types the quantity "<quantityNumber>" in the box
        Then user verifies item quantity changes to "<quantityTotal>"

        Examples:
            | quantityNumber | quantityTotal |
            | 4              | 4             |
   

   
    
