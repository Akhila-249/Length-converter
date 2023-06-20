const conversionRates = {
    mm: 0.001,
    cm: 0.01,
    m: 1,
    km: 1000,
    inch: 0.0254,
    ft: 0.3048,
    yard: 0.9144,
    mile: 1609.34
  };
  
  function convertLength() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
  
    var convertedValue = inputValue * conversionRates[fromUnit] / conversionRates[toUnit];
  
    document.getElementById("outputValue").value = convertedValue;
  }
  function resetFields() {
    document.getElementById("inputValue").value = "";
    document.getElementById("outputValue").value = "";
    document.getElementById("fromUnit").selectedIndex = 0;
    document.getElementById("toUnit").selectedIndex = 0;
  }
  