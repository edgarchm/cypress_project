@pdp @regression @em
Feature: Verify klarna container
@smoke @US @CA
Scenario: as a guest user wants to see klarna tab container on pdp page by clicking learn more reference
Given a guest user is on the PDP page for an indiviual product
When user attempts to learn more about Klarna interest fee payments
Then It should display Klarna container with information to proceed

