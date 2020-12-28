const TempCalculation = (() => {
  const tempInteger = (temp) => Math.round(temp);

  const toFahrenheit = (temp) => {
    temp = parseFloat(temp);
    const newtemp = tempInteger((temp = temp * 1.8 + 32));
    return newtemp;
  };

  return { tempInteger, toFahrenheit };
})();

export default TempCalculation;
