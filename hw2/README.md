# Random Data Generator

A simple library to generate random data for testing and development.

## Installation

Install the library via NPM:

```bash
npm install random-data-generator
```

## Usage
Import the library in your project and use its methods:

```bash
const { generateRandomName, generateRandomNumber, generateRandomDate } = require('random-data-generator');
// Generate a random name

console.log(generateRandomName()); // Example output: "Alice"
// Generate a random number between 1 and 50

console.log(generateRandomNumber(1, 50)); // Example output: 27
// Generate a random date between 2000 and today

console.log(generateRandomDate(new Date(2000, 0, 1), new Date()));
// Example output: "2015-03-25T12:00:00.000Z"
```

## Features

* Generate random names from a predefined list.
* Generate random numbers within a given range.
* Generate random ISO date strings within a range.

## API

### `generateRandomName()`

Returns a random name from a predefined list.

### Example:
```bash
generateRandomName(); // Output: "Charlie"
```

### `generateRandomNumber(min, max)`

Generates a random number between the provided `min` and `max` values.

* **min**: The minimum value (inclusive). Default is `0`.
* **max**: The maximum value (inclusive). Default is `100`.

### Example:
```bash
generateRandomNumber(10, 20); // Output: 14
```

### `generateRandomDate(start, end)`

Generates a random date between the provided `start` and `end` dates.

* **start**: The start date (default is `2000-01-01`).
* **end**: The end date (default is the current date).

### Example:

```bash
generateRandomDate(new Date(2000, 0, 1), new Date());
// Output: "2013-04-17T08:23:00.000Z"
```

## Contributing
Contributions are welcome! If you find a bug or have an idea for a new feature, feel free to open an issue or submit a pull request.

## Repository
You can find the code on [GitHub](https://github.com/yourusername/random-data-generator)

## License
This project is licensed under the **MIT License**. See the [LICENSE](https://opensource.org/licenses/MIT) file for details.

Happy coding! 😊