# Bank API Performance Tests

Performance testing project for a banking API using **JavaScript** and
**k6**. This repository contains load testing scenarios designed to
evaluate the performance, reliability, and scalability of API endpoints
under different traffic conditions.

------------------------------------------------------------------------

# Introduction

This project provides automated **performance tests for a Bank API**
using the **k6** load testing framework.

The objective is to simulate realistic user traffic against the API and
measure metrics such as:

-   Response time
-   Throughput
-   Error rate
-   System stability under load

These tests help identify performance bottlenecks and ensure the API can
handle expected production workloads.

The tests are implemented in **JavaScript**, allowing flexible scripting
and easy integration with CI/CD pipelines.

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

# Goal of Each Group of Files

### tests/

Contains the **main performance test scripts** executed by **k6**.

Examples of scenarios implemented here may include:

-   Load testing
-   Stress testing
-   Spike testing

Each script defines:

-   Virtual users
-   Test duration
-   API endpoints being tested
-   Checks and thresholds

------------------------------------------------------------------------

### fixtures/

Contains **static test data** used during performance testing.

Examples:

-   Request payloads
-   Authentication data
-   Mock transaction inputs

This helps maintain separation between **test logic and test data**.

------------------------------------------------------------------------

### helpers/

Utility modules that provide reusable logic, such as:

-   Authentication helpers
-   Request builders
-   Common validations
-   Shared functions used across multiple tests

------------------------------------------------------------------------

### config/

Configuration files responsible for defining:

-   Environment-specific configurations (e.g. `config.local.json`)
-   Base URL fallback when `BASE_URL` environment variable is not set
-   Test execution parameters

------------------------------------------------------------------------

# Installation Mode

## 1 -- Install k6

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

## 2 -- Clone the repository

``` bash
git clone https://github.com/LRCCN/bank-api-performance.git
```

Navigate to the project directory:

``` bash
cd bank-api-performance
```

------------------------------------------------------------------------

## 3 -- Configure environment variables

Before executing the tests, you must define the API base URL. There are
two ways:

**Option 1 — Environment variable (recommended):**

Linux / Mac:

``` bash
export BASE_URL=https://api.yourbank.com
```

Windows (PowerShell):

``` powershell
$env:BASE_URL="https://api.yourbank.com"
```

**Option 2 — Config file (local fallback):**

Edit `config/config.local.json` and set the `baseUrl` value:

``` json
{
    "baseUrl": "https://api.yourbank.com"
}
```

If `BASE_URL` is set, it takes priority over the config file.

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
