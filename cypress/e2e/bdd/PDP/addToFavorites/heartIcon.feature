@pdp @regression
Feature: Verify forwarding to a login page when a guest attempts to save a product by clicking the heart icon
@smoke @US @CA 
Scenario: As a guest I attepmts to save product by clicking icon
Given a guest on the pdp page with selected size product
When user clicks to heart icon
Then Page should forwarded a user to the login page

