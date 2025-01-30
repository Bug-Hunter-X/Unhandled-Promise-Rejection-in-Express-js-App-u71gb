const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(next); // Pass the error to the next middleware
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!'); // Send a proper error response
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}