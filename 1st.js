const prompt = require("prompt-sync")();
function celsiusToFahrenheit(celsius) {
    let fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
}
const celsius = Number(prompt("Enter Celsius: "));
const result = celsiusToFahrenheit(celsius);
console.log(`${celsius}°C is equal to ${result}°F`);
