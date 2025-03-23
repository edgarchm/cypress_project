@pdp @regression
Feature: Verify recommendation to purchase a product additionally with main product on pdp page
    @smoke @US @CA 
    Scenario: as a guest user on an individual PDP page
        Given as guest user on the individual product PDP page with recommended products in You May Also Need
        When user scrolls to the You May Also Need section
        Then users are able to see a recommended products