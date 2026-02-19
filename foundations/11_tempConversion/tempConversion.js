const convertToCelsius = function(fahrenheit) {
  const result = (fahrenheit - 32) / 1.8;
  const isZero = Math.floor((result * 10) % 10);

  if (!isZero) return result;
  else return +result.toFixed(1);
};

const convertToFahrenheit = function(celsius) {
  const result = celsius * 1.8 + 32;
  const isZero = Math.floor((result * 10) % 10);

  if (!isZero) return result;
  else return +result.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
