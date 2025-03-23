Feature: verify Authenticated user should able to see instore pick up When User should able to see Instore Pickup details,Payment details and Instore Pickup items and click on place order
@US @CA @smoke @bopis @regression
Scenario: User should able to see in Review Page with Instore Pickup Details, Payment Details , Instore Pickup Items and click on Place order
Given Authenticated user on the checkout review Page for instore Pickup
When User able to see Instore Pickup details,Payment details,Instore Pickup items and place order
Then User should see place order page