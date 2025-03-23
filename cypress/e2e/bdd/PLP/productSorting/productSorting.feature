# /* *********************************************
#  *  Page Object File Name: productSorting.feature
#  *  Initial Development By: Edgar Chavez
#  *  Date: 20230202
#  * ******************************************* */
@regression
Feature: Product Sorting - Verify in category browse page-Sort
    @smoke @US @CA @PLP
    Scenario: User navigates to Sally PLP Page, changes sorting options
        Given User is at PLP Page
        When User changes the sorting by choosing the first sort option from the list
        Then Products are sorted based on the option selected