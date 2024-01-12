function convertTemperature() {
  let tempInput = document.getElementById("temperature-input").value;
  let inputScale = document.getElementById("input-scale").value;
  let result = document.getElementById("result");

  if (!tempInput) {
      result.innerHTML = "Please enter a temperature.";
      return;
  }

  tempInput = parseFloat(tempInput);

  let celsius, fahrenheit, kelvin;

  switch (inputScale) {
      case "celsius":
          celsius = tempInput;
          fahrenheit = (celsius * 9 / 5) + 32;
          kelvin = celsius + 273.15;
          break;
      case "fahrenheit":
          fahrenheit = tempInput;
          celsius = (fahrenheit - 32) * 5 / 9;
          kelvin = celsius + 273.15;
          break;
      case "kelvin":
          kelvin = tempInput;
          celsius = kelvin - 273.15;
          fahrenheit = (celsius * 9 / 5) + 32;
          break;
  }

  result.innerHTML = `Celsius: ${celsius.toFixed(2)} °C<br>Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>Kelvin: ${kelvin.toFixed(2)} K`;
}
