@regression
Feature: Verify click arrow functionality to the left anf to the right works properly in shop category
# Givem sally home page where we have arrow function to the left anf to the right for shop category
# by default it should display 6 categories out of 9
# by clicking to the left it should shift to the left and display hidden categories from right
# by clicking to the right it should shift to the right and display other categories from left



@smoke @US @CA 
Scenario: Verify displaying product categories by shifting to the right and to the left
Given as a guest user the homepage of Sally application Shop By Categories section
When clicking to the right and to the left list of shop categories
Then Verify visibility of Displayed categories
