# Bank API Performance Tests

Performance testing project for a banking API using **JavaScript** and
**k6**. This repository contains load testing scenarios designed to
evaluate the performance, reliability, and scalability of API endpoints
under different traffic conditions.

------------------------------------------------------------------------

# Introduction

Automated performance tests for a Bank API using **k6** and **JavaScript**.

The API used as the target for these tests is available at:
[https://github.com/juliodelimas/banco-api](https://github.com/juliodelimas/banco-api)

------------------------------------------------------------------------

# Technologies Used

The following technologies are used in this project:

-   **k6** -- Open-source performance testing tool
-   **JavaScript (ES6)** -- Test scripting language
-   **HTML Report (K6 Dashboard Export)** -- For test result
    visualization
-   **Environment Variables** -- Configuration of execution environments

------------------------------------------------------------------------

# Repository Structure

    bank-api-performance
    │
    ├── tests/                # Main performance test scenarios
    ├── fixtures/             # Test data used during execution
    ├── helpers/              # Utility functions shared across tests
    ├── config/               # Test configuration files
    │── utils/                # Utility functions
    ├── README.md             # Project documentation

------------------------------------------------------------------------

# Installation

## 1 - Install k6

Install **k6** following the official documentation:

https://k6.io/docs/get-started/installation/

Example using **MacOS (Homebrew)**:

``` bash
brew install k6
```

Example using **Windows (Chocolatey)**:

``` bash
choco install k6
```

Example using **Linux**:

``` bash
sudo apt install k6
```

------------------------------------------------------------------------

## 2 - Clone the repository

``` bash
git clone https://github.com/LRCCN/bank-api-performance.git
```

Navigate to the project directory:

``` bash
cd bank-api-performance
```

------------------------------------------------------------------------

# Project Execution

To execute a performance test using **k6**, run:

**Login test:**

``` bash
k6 run tests/login.test.js
```

**Transfers test:**

``` bash
k6 run tests/transfers.test.js
```

------------------------------------------------------------------------

# Real-Time Dashboard and HTML Report

You can enable the **k6 Web Dashboard** to visualize performance metrics
in real time and export an HTML report.

Run the following command:

``` bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/login.test.js
```

This command will:

-   Enable the **real-time dashboard**
-   Generate a **HTML report**
-   Export it as:

html-report.html

After the test finishes, open the report in your browser to analyze:

-   Response time distribution
-   Request throughput
-   Error rate
-   Performance trends
