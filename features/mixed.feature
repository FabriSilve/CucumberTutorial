Feature: Mixed calls

  Scenario: Add numbers

    Given I start with 0
    When I add the following numbers:
      | 1 |
      | 2 |
      | 3 |
      | 4 |
    Then I end up with 10

  Scenario: Add numbers and multiply

    Given I start with 0
    When I add the following numbers:
      | 1 |
      | 2 |
    When I multiply by 3
    Then I end up with 9

  Scenario: Add and multiply

    Given I start with 3
    When I take the following actions:
      | add   | 3 |
      | times | 5 |
    Then I end up with 30