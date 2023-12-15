// Function to find the square root of a value using the Newton-Raphson method
function squareRootNewtonRaphson(value, precision) {
    let guess = value / 2; // Initial guess, starting at half of the specified value
    let sqrt = 0; // Variable to store the square root

    // Loop until the guess is accurate enough to the defined precision
    while (Math.abs(guess - sqrt) > precision) {
        sqrt = guess;
        guess = (value / guess + guess) / 2; // Newton-Raphson formula for square root
    }
    return sqrt;
}

const value = 25; // Number to find the square root of
const precision = 0.001; // required precision to number of decimal places

// Calculate the square root of a number using the Newton-Raphson method
const answer = squareRootNewtonRaphson(value, precision);

console.log(`Square root of ${value} is approximately ${answer}`);
