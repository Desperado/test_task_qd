# UI Test task
## Overview 

This is example Cypress scenario to do the tests against the simple login form
## Installation

After you have cloned the repository locally please use this command to install the framework and dependencies. The framework explicitly uses new version of Cypress - `cypress@10.3.0` 
  
	npm install

After that you can run Cypress in without UI with
    
	npm run -s cypress:run -- --env username=tomsmith,password=SuperSecretPassword! --spec cypress/e2e/sign-in.cy.js

## The solution

uses plain BDD spec with standard Cypress stylistic, Cucumber could be used as well but I left it out for the sake of simplicity here.

## Improvements
### Improvement #1