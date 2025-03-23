@regression
Feature: Guest User is Navigated to Sally Home Page

Background: Guest User is on Sally Home Page
@smoke @US @CA @PLP
Scenario: Guest User navigates to search result grid page

Given I am a guest user on the search results grid page 
When I open quickview on a product with size variations 
Then I select and add the first available product to cart 
Then I should see the add to basket confirmation "1 Item(s) Added to Bag"