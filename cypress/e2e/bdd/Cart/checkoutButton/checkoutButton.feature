# /* *********************************************
#  * Page Object File Name: checkoutButton.feature
#  * ******************************************* */
@regression
Feature: Guest User is navigated to cart page with an available ship to me item in cart and navigates to chechkout button, user should see Guest Checkout Modal, Create Account Modal and Login Modal

    # ########################### DONT USE #############################
    # Background: Guest User added an item to bag for Ship to Me
    # Given User navigated to PLP page
    # When User adds an item to bag
    # Then User confirms item has been added to bag
    # And User click go to bag button
    # ########################### END #################################
    @smoke @US @CA @cart
    Scenario Outline: Guest User navigates to bag to enter checkout button

        Given user on the cart page with an available ship to me item in cart
        When user clicks the CHECKOUT button
        Then user should see "<modalOptions>"


        Examples:
            | modalOptions   |
            | Guest CheckOut |
            | Create Account |
            | Log In         |