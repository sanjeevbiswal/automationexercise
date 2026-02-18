Feature: Practice Automation Login

Scenario: I can login with valid credentials
  Given I navigate to the website "https://practicetestautomation.com/practice-test-login/"
  When I enter the username "student"
  And I enter the password "Password123"
  And I click the submit button
  Then I should see login success message
  And I click the logout button
  Then I should see the login page again