# /* *********************************************
#  * Page Object File Name: clickProductInfo.feature
#  * ******************************************* */
@regression
Feature:  Guest User is navigated to cart page with an available ship to me item in cart and confirms that Product Image, Product Name and Product SKU are cliackable and will navigate to next page

    # ########################### DONT USE #############################
    # Background: Guest User added an item to bag for Ship to Me
    # Given User navigated to PLP page
    # When User adds an item to bag
    # Then User confirms item has been added to bag
    # And User click go to bag button
    # ########################### END #################################
    @smoke @US @CA @cart
    Scenario Outline: Guest User navigates to bag to click product image

        Given user on the cart page with an available ship to me item in cart
        When user clicks on "<productInfo>" in cart
        Then user should be navigated to inside the cart with selected "<productInfo>" displayed

        Examples:
            | productInfo   |
            | Product Image |
            | Product Name  |
            | Product SKU   |