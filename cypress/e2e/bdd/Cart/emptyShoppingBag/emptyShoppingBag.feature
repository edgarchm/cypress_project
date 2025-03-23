# /* *********************************************
#  * Page Object File Name: emptyShoppingBag.feature
#  * ******************************************* */
@regression
Feature: Guest User is navigated to cart page with an available ship to me item in cart and emptying the cart

    # ########################### DONT USE #############################
    #Background: Guest User added an item to bag for Ship to Me
    #Given User navigated to PLP page
    #When User adds an item to bag
    #Then User confirms item has been added to bag
    #And User click go to bag button
    # ########################### END ##################################
    @smoke @US @CA @cart
    Scenario: Guest User navigates to a bag to empty the bag

        Given user on the cart page with an available ship to me item in cart
        When user clicks Delete item and confirms to remove the product from Remove Product modal
        Then user should see item deleted and see an EMPTY BAG

