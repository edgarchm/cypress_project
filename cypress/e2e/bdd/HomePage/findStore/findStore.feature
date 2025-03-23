# /* *********************************************
#  *  Page Object File Name: findStore.feature
#  *  Initial Development By: Edgar Chavez
#  *  Date: 20230202
#  * ******************************************* */
@regression
Feature: Find Store - Find Sally Store locations based on a given zip code
    @smoke @US
    Scenario Outline: User successfully searches Sally Store locations by using zip code
        Given User at Sally Find a Store page
        When User types a "<zipStatus>" Postal Code and clicks search button
        Then Stores located in the "<zipStatus>" Postal Code area display
        Examples:
            | zipStatus |
            | valid     |
            | invalid   |