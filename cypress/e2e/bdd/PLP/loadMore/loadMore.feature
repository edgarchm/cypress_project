# /* *********************************************
#  *  Page Object File Name: addToBagPLP.feature
#  *  Initial Development By: Edgar Chavez
#  *  Date: 20230202
#  * ******************************************* */
@regression
Feature: Load More - Verify in category PLP browse page, user able to Load More products to the list by clicking the LOAD MORE button
  @smoke @US @CA @PLP
  Scenario: User navigates to product PLP page and adds more products to the list by clicking the LOAD MORE button
    Given Guest user is on the PLP page with load more
    When User clicks the LOAD MORE button
    Then More items are added to the list