@pdp @regression
Feature: Verify scrolling page to review section when a guest clicks to the rating
@smoke @US @CA 
Scenario: Page scrolls down when a guest on the pdp page clicks to the rating views
Given a guest is on the PDP page for an individual product with reviews
When user clicks on the ratings starts
Then page should be scrolled to see the review section