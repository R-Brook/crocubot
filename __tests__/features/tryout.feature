Feature: The website's main menu

Scenario Outline: Checking the main menu link is correct for <pageSection>
  Given I am on the homepage
  When I click on the link with the text <linkText>
  Then I should get taken to <expectedPage>

  Examples:

  | pageSection | linkText         | expectedPage |
  | Lorem       | linkExampleOne   | lorem.html   |
  | Ipsum       | linkExampleTwo   | ipsum.html   |
  | Foo         | linkExampleThree | foo.html     |
