# /* *********************************************
#  *  Page Object File Name: addToBagPLP.feature
#  *  Initial Development By: Edgar Chavez
#  *  Date: 20230202
#  * ******************************************* */
@regression @add
Feature: Add to Bag PLP - Verify in category PLP browse page, user able to add product to the cart by click on "ADD TO BAG" button

    @smoke @US @CA @PLP
    Scenario Outline: I am a guest user on the product PLP, When I add to basket, Then I should see the add to basket confirmation
        Given Guest user on PLP "<addToBagExample>" product page
        When User clicks the Add to Bag button on the first "<addToBagExample>" available item
        Then A pop message displays

        Examples:
            | addToBagExample |
            | simple          |
            | color           |
            | size            |
            | bundles         |