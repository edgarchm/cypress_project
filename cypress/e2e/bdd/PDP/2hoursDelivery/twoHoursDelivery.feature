@pdp1 @pdp @regression @us
Feature: Verify ability to enter address for 2-hours delivery

@smoke @US
Scenario: Verify ability to enter address for 2-hours delivery eligible
Given a guest user is on the PDP for an individual product that is 2HD eligible
When user attempts to provide an address for 2 hours delivery
Then user should see readiness for delivery for his address and his address displayed on the page 

@smoke @US
Scenario: Verify error message for entering address for that is not 2-hours delivery
Given a guest user is on the PDP for an individual product that is not 2HD eligible
When user attempts to provide an address for not eligible 2 hours delivery
Then user should see error message



# Background: Background name
# Given Given a guest user is on the PDP for an individual product that is 2HD eligible 

# Scenario: As a guest on the pdp page with product attempts to enter an addrees for 2 hours delivery

# When user attempts to provide an address for 2 hours delivery
# Then user should see readiness for delivery for his address and his address displayed on the page

# Scenario: As a guest on the pdp page wants to change their existing address for 2 hours delivery

# When user attempts to change an existing address to another for 2 hours delivery
# Then user should see changes of address and status of delivery

# Scenario: As a guest on the pdp page with product attempts to enter only zipcode field as an addrees for 2 hours delivery

# When user attempts to provide only zipcode in address for 2 hours delivery
# Then user should see red warnning message