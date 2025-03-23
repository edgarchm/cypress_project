#flaky
@pdp @regression
Feature: Verify on the search result page, the user is able to see the product list which is related to the entered search term
@smoke @US @CA 
Scenario Outline: Scenario Outline name
Given a guest user with a list of products  for searching on the home page
When  a guest enters each '<product>' into the search box and clicks search
Then list of searched items should be displayed in PLP page
Examples:
|product|
|ION|
|creme developer|

# Verify in product details page, user able to add product to the cart after updating the qty 