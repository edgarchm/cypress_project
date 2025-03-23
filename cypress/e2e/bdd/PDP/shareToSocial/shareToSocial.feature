@pdp @regression
Feature: Verify ability to share product feature with social media
@smoke @US @CA 
Scenario Outline: As a guest user wants to share current product in his social media page by clicking label
Given a guest user is on the PDP page for an indiviual product
When a user attempts to share product information on his  '<socialmedia>' page
Then It should be displayed on the pdp page

Examples: 
|socialmedia|
|Facebook|
|Twitter|
|Pinterest|
|Mail|

@smoke @US @CA 
Scenario Outline: As a guest user wants to share current product in his mail social media page by clicking label
Given a guest user is on the PDP page for an indiviual product
When a user attempts to share product information on his  mail
Then a user should be able to see a tab-content for sending an email on the pdp page