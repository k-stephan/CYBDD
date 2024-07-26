Feature: Mars Login

Scenario: Valid Login to MARS
    Given Vist MARS URL
    When Enter "SFSMARSW" and "mars1"
    Then  click login
    Then valid dashboard
