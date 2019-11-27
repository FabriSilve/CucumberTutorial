Feature: Async Subtraction

  Background:
    Given I start with 3

  Scenario: 3 - 1
    When I subtract 1
    Then I end up with 2

  Scenario: 3 - 2
    When I subtract 2
    Then I end up with 1

  Scenario: 3 - 0
    When I subtract 0
    Then I end up with 3
