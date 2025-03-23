#flakey
@pdp @pdp1 @regression @addpdp 
Feature: Verify the ability add  to a bag feature for an available product when a guest on PDP page

    @smoke @US @CA 
    Scenario: Verify add to basket confirmation when a guest user on a PDP with size variation of product and adds it to cart
        Given a guest user on a PDP with size variation product
        When user select the first available size and adds to basket
        Then a user gets confirmation tab

    @smoke @US @CA 
    # Verify in product details page, user able to add product to the cart after updating the qty
    Scenario: Verify add to basket confirmation when a user able to update the qty of product on the product details page
        Given a guest user with quantity variation of product on the product details page
        When user increases the quantity of product then adds to cart
        Then a user gets confirmation tab

    @smoke @US @CA 
    #verify in pdp page user able to add product to the cart with different color variation
    Scenario: Verify add to basket confirmation when a guest user on a PDP with color variation of product and adds it to cart
        Given a guest user on a PDP with color variation product
        When user select the first available color and adds to basket
        Then a user gets confirmation tab
    @smoke @US @CA 
    Scenario: Verify add to basket confirmation when a guest user on an available individual product PDP
        Given a guest user is on the PDP page for an indiviual product and adds to basket
        Then a user gets confirmation tab
    @smoke @US @CA 
    Scenario: Verify add to basket confirmation when a guest user on a bundled product PDP
        Given Guest user on a bundled product PDP page and adds to basket
        Then a user gets confirmation tab


