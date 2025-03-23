Feature: verify authenticated user should able to see instore payment page and click on applygift card and click on review
@US @CA @smoke @bopis @regression
Scenario:user can apply gift card for payment
Given Authenticated user on the checkout Payment page for instore Pickup
When  User selects on Apply gift card and enter code and enter pin and click on Apply
Then  User should see gift card applied in payment page section