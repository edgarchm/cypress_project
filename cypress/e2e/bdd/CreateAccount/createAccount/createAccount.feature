# /* *********************************************
#  *  Page Object File Name: createAccount.feature
#  *  Initial Development By: Edgar Chavez
#  *  Date: 20230202
#  * ******************************************* */
@regression
Feature: Create Account - User able to create an non-loyalty account without checked "Sally Beauty Rewards" checkbox with enter valid details
  @smoke @US @CA
  Scenario: User able to create an non-loyalty account without checked "Sally Beauty Rewards" checkbox with enter valid details
    Given User is at the Create Account page
    When User enters profile information into the form
    When Unchecks the "Join Sally Beauty Rewards" checkbox
    When User clicks on the Create Account button
    Then A Dialog Displays a welcome message