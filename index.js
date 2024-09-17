
// Import the single function exported using Default export
// const generatRandomNumber = require('./utils');

// Import multiple functions exported in commonJS
const { generatRandomNumber, celciusToFahrenheit } = require('./utils');

console.log(`Random Number: ${generatRandomNumber()}`);

console.log(`Celcius to Fahrenheit: ${celciusToFahrenheit(0)}`);