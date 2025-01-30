# Unhandled Promise Rejection in Express.js

This repository demonstrates a common error in Express.js applications: improper handling of asynchronous operations that can lead to unhandled promise rejections and poor user experience.  The `bug.js` file showcases the error, while `bugSolution.js` provides the corrected code.

**Problem:**

The original code uses `then()` and `catch()` for handling asynchronous operations, but only logs the error to the console.  This does not provide proper feedback to the client and the unhandled promise rejection can disrupt the application.

**Solution:**

The improved code utilizes Express's error handling middleware to properly catch errors and send appropriate responses to the client, improving the robustness and user experience.

**How to run the examples:**

1. Clone the repository.
2. Navigate to the project directory.
3. Run `node bug.js` (to see the error) and `node bugSolution.js` (to see the solution).