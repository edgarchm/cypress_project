@pdp @regression
Feature: Verify zooming of image when guest hover mouse on it
@smoke @US @CA 
Scenario: As a guest on the pdp page, I am hovering mouse on image to zoom it
Given A guest on the pdp page with product image
When user hovers over the main product image
Then It should zoom into the image