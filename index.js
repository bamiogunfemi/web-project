// Function to find the square root using the Newton-Raphson method
function squareRootNewtonRaphson(number, precision) {
  let guess = number / 2; // Initial guess, starting at half of the number
  let sqrt = 0; // Variable to store the square root

  // Loop until the guess is accurate enough based on precision
  while (Math.abs(guess - sqrt) > precision) {
    sqrt = guess;
    guess = (number / guess + guess) / 2; // Newton-Raphson formula for square root
  }

  return sqrt;
}

const number = 25; // Number to find the square root of
const precision = 0.00001; // Precision of the result

// Calculate the square root using the Newton-Raphson method
const result = squareRootNewtonRaphson(number, precision);

console.log(`Square root of ${number} is approximately ${result}`);
