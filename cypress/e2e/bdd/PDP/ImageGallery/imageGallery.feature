@pdp @regression
Feature: Verify ability to change image on product page for guest
@smoke @US @CA 
Scenario: As a guest I attept to click next image of product to see it
Given a guest on the pdp page with any product which has images
When user click to next image
Then It should switch to next image on the page