@pdp @regression @em
Feature: Verify brand page if a guest has been forwarded from the PDP page
@smoke @US @CA 
Scenario: As a guest on the pdp page would like to see all products related to current brand by clicking on the brand link
Given a guest user is on the PDP page for an indiviual product 
When user clicks the brand link 
Then they should be taken to the category page for that brand
