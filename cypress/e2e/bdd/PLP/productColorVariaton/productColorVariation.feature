@regression
Feature: Guest User is Navigated to Sally Home Page

Background: Guest User is on Sally Home Page
@smoke @US @CA @PLP
Scenario: Guest User navigates to search result grid page
  Given I am guest user on a search results grid page
  When I choose an available color from the color chooser modal of a product with color variations
  Then A pop message displays
#Then I should see the add to basket confirmation "1 Item(s) Added to Bag"