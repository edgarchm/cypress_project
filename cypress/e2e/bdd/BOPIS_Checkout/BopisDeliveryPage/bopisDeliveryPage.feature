Feature: verify Authenticated user should able to see instore pick up information, contact information and click on payment
@US @CA @smoke @bopis @regression
Scenario: User should able to see Instore Pickup information, contact information and click on payment
Given Authenticated user on the checkout shipping address page with simple product for instore Pickup in their baskets
When User able to see saved Instore Pickup information ,contact information and click on Next:Payment
Then User should see Payment page section