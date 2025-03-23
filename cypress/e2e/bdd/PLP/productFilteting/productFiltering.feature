# /* *********************************************
#  *  Page Object File Name: productFiltering.feature
#  *  Initial Development By: Edgar Chavez
#  *  Date: 20230202
#  * ******************************************* */
@regression
Feature: Product Filtering - Verify in category browse page- Filters  is enabled and provides search results based on applied filters
    @smoke @US @CA @PLP
    Scenario: User navigates to Sally PLP Page, changes filtering options
        Given User is at PLP Page
        When User changes the filtering by choosing the first filter from the list
        Then Products are filtered based on the option selected