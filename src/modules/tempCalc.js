const TempCalculation = (() => {

    const tempInteger = (temp) => Math.round(temp);

    const toFahrenheit = (temp) => {
        temp = parseFloat(temp);
        temp = tempInteger((temp = temp * 1.8 + 32));
    };

    return { tempInteger, toFahrenheit }

})();

export default TempCalculation;
