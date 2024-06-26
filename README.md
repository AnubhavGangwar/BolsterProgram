# Cypress Test Automation Framework

## Overview

This repository contains an automated testing framework built using Cypress . The framework is designed to provide a scalable and maintainable structure for writing and executing end-to-end tests.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Configuration](#configuration)

## Features

- **Page Object Model (POM):** Organize your tests using the Page Object Model for improved maintainability and reusability.
- **Test Data Handling:** Manage test data effectively to create a robust and scalable test suite.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed locally

## Getting Started

1. Install dependencies::

   ```terminal
   npm install
2. Run Cypress Ui::

   ```terminal
   npx cypress open
## Project Structure
cypress/
  ├── fixtures/            # Test data files
  ├── e2e/                 # Test scripts
  ├── support/             # Custom commands and utilities & Pages
  └── reports/             # Reports 
## Running Tests
 Execute all tests in Headless Mode:
 ``npx cypress run
 Execute all tests in Headed Mode:
 ``npx cypress run --headed
 Execute all tests and Genertae Report:
 ``npm run test
 Execute Api tests and Genertae Report:
 ``npm run testApi

 ## Configuration
 Configure Base Url:
    Navigate to cypress.config.js and change the baseUrl inside e2e to desired baseurl
 Activate/Deactivate Test isolation :
    Navigate to cypress.config.js and change the below Values Accordingly
    To Activate - testIsolation:true,
    To Dectivate - testIsolation:false,