# /* *********************************************
#  * Page Object File Name: deleteItem.feature
#  * ******************************************* */
@regression
Feature: Guest User is navigated to cart page with an available ship to me item in cart and deleting and cancelling the deletion of the item and confirming bag is empty if deleted or still in the cart if canceled the deletion

    # ########################### DONT USE #############################
    # Background: Guest User added an item to bag and scenario is based on Ship to Me
    # Given User navigated to PLP page
    # When User adds an item to bag
    # Then User confirms item has been added to bag
    # And User click go to bag button
    # ########################### END #################################
    @smoke @US @CA @cart
    Scenario Outline: Guest User navigates to bag to Delete the item

        Given user on the cart page with an available ship to me item in cart
        When user clicks Delete item and "<removeProduct>" from Remove Product modal
        Then user should see "<cartStatus>"

        Examples:
            | removeProduct | cartStatus   |
            | confirm       | emptyBag     |
            | cancel        | itemintheBag |