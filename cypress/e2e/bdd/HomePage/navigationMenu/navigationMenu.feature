@regression @hp
Feature: Verify hover over mouse of navigation menu
# Sally beauty has 8 main sections of products in home page menu(navigation menu)
#  There are: "Deals", Hair Color, Hair Care, Tools&Brushes, Nails, Beauty, Salon Supplies, Brands
# AC: - verify count of section is 8 in home page
#  - verify names of each sections
#  - verify the order of displaying menu sections in home page
#  - verify clickobiility of each section
# - verify hang over ability of each section (deal section doesn't have hang over)


@smoke @US @CA
Scenario: Verify displaying of menu sections in home page
Given the navigation bar for guest user on the home page of Sally application
When a guest does mouse hover on each menu
Then a guest expected to see the hover ability of each section to display a table of product options

