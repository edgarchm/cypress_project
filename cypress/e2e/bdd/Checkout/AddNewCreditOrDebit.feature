# /* *********************************************
#  *  Page Object File Name: AddNewCreditOrDebit.feature
#  *  Initial Development By: Edgar Chavez
#  *  Date: 20230202
#  * ******************************************* */
@regression
Feature: Checkout - customer able to save debit or credit card details for payment

  Scenario: Guest customer able to save debit or credit card details for payment
    Given Guest customer with items in cart is ready moves to checkout
    When User completes information for delivery address
    When Enters payment information and saves it
    Then Credit Card infromations displays on payment details 
