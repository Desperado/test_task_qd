# UI Test task
## Overview 

This is example Cypress scenario to do the tests against the simple login form

## Introduction

[Cypress.io](https://cypress.io) is a very popular test framework for testing complex rich-UI applications, has a rich documentation and support, instantly supports Chrome and Electron and also recently has started to support Firefox. No wonder that I have chosen this framework for this task. I think it is easy and approachable, and also its syntaxis is very simple

## System requirements

- MacOS 10.x-12.x
- Node.js 14

## Installation

After you have cloned the repository locally please use this command to install the framework and dependencies. The framework explicitly uses new version of Cypress - `cypress@10.3.0` 
  
	npm install

After that you can run Cypress in without UI with
    
	npm run -s cypress:run -- --env username=tomsmith,password=SuperSecretPassword! --spec cypress/e2e/sign-in.cy.js

## The solution

uses plain BDD spec with standard Cypress stylistic, Cucumber could be used as well but I left it out for the sake of simplicity here.

## Github Status

| CI            | Build Status  |
| :---------    | :---------    |
| Github Action | [![UI-Automation](https://github.com/Desperado/test_task_qd/actions/workflows/ui.yml/badge.svg)](https://github.com/Desperado/test_task_qd/actions/workflows/ui.yml) |

## Improvements
### Improvement #1