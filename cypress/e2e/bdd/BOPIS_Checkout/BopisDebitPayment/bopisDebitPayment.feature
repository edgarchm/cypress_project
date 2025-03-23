Feature: verify  Authenticated user should able to see instore pick up saved debit or credit card,cvv number and saved delivery address and click on Review
@US @CA @smoke @bopis @regression
Scenario: User should able to see saved credit or debit card details, enter CVV number and review page
Given Authenticated user on the checkout Payment page for instore Pickup
When  User selects a saved debit or credit card details and enter CVV number and click on Next:Review
Then  User should see checkout review section
