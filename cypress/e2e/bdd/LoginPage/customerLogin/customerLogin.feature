# /* *********************************************
#  *  Page Object File Name: customerLogin.feature
#  *  Initial Development By: Ulugbek Iskanadzhiev
#  *  Date: 20230202
#  * ******************************************* */
@regression
Feature: Customer Login - Validate Sally Beauty Online Store Login functionality
  @smoke @US @CA 
  Scenario Outline: User successfully logins using valid credentials, fails with invalid data
    Given User is at the Sally login page
    When User enter "<accessType>" credentials to access
    Then User "<loginStatus>" logs in
    Examples:
      | accessType | loginStatus    |
      | valid      | successfully   |
      | invalid    | unsuccessfully |