# API Test task
## Overview 

Second part of Test Automation Assignment

API TEST AUTOMATION FRAMEWORK based on `mocha.js` and `chai-promises` and is used against reqres.in

## Introduction

[Mocha.js](https://mochajs.org/) Mocha is a feature-rich JavaScript test framework running on [Node.js](https://nodejs.org/) and in the browser, making asynchronous testing simple and fun.
Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.
That's why it is an easy and good choice for any kind of API Test Automation purpose.

## System requirements

- MacOS 10.x-12.x
- Node.js 14
- MacOS commandline tools
- VS Code for opening the project

### Github Status

| CI            | Build Status  |
| :---------    | :---------    |
| Github Action | [![API-Automation](https://github.com/Desperado/test_task_qd/actions/workflows/api.yml/badge.svg)](https://github.com/Desperado/test_task_qd/actions/workflows/api.yml) |

<br>

### How to run after check out

```bash 
cd api
npm install
npm run test
```

### How to get reporting

```bash 
npm run combine-report
npm run generate-report
```

Then the report would be generated locally

<br>


## Possible enhancements

A few things can be done more.
- Function around get one user data
- I was looking to additionally automatically post status reports to github.io page but hasn't resolved the publish step
