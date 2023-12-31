document.getElementById("convertBtn").addEventListener("click", function () {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const kelvinInput = document.getElementById("kelvin");
  
    if (celsiusInput.value !== "") {
      const celsius = parseFloat(celsiusInput.value);
      const fahrenheit = (celsius * 9/5) + 32;
      const kelvin = celsius + 273.15;
  
      fahrenheitInput.value = fahrenheit.toFixed(2);
      kelvinInput.value = kelvin.toFixed(2);
    }
  });
  