Feature: Paymentpage - Validate Add new credit or debit card details

  @smoke @US @CA @checkout @regression
  Scenario: User should able to click on add new credit or debit card
    Given Authenticated user on the Payment page with available items for ship to me 
    When User click on add new credit or debit card and enter the card number, month,year,CVV and click on save my credit info checkbox
    Then User should able to see added new Credit or debit card details in Payment page