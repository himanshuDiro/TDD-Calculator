# String Calculator TDD Kata

This project demonstrates the String Calculator TDD Kata implementation in JavaScript using Jest for testing.

## TDD Process

The solution was developed following the Test-Driven Development process:

1. Write a failing test
2. Write minimal code to make the test pass
3. Refactor the code while keeping tests green
4. Repeat

## Steps Implemented

1. Empty string returns 0
2. Single number returns the value
3. Two comma-separated numbers return their sum
4. Any amount of numbers can be handled
5. Newline delimiter is supported
6. Custom delimiters are supported
7. Negative numbers throw an exception
8. Multiple negative numbers are shown in the exception message

## Project Setup

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/himanshuDiro/TDD-Calculator.git


# Install dependencies
npm install
```

### Running Tests

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch
```

## Implementation Details

- `StringCalculator.js` - Contains the implementation of the string calculator
- `StringCalculator.test.js` - Contains the tests for the string calculator

## Commit History

The commit history shows the step-by-step evolution of the code following TDD principles:

1. Initial setup: Created StringCalculator with add function and first test for empty string
2. Step 1: Implemented handling for single number input
3. Step 1: Implemented handling for two comma-separated numbers
4. Step 2: Implemented handling for any amount of numbers
5. Step 3: Added support for newline as delimiter
6. Step 4: Added support for custom delimiters
7. Step 5: Added validation for negative numbers and throw exception
8. Step 5: Enhanced negative number validation to show all negative numbers in exception message
9. Refactoring: Improved code organization with helper functions and more functional programming style for better readability
