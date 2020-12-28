import DataTransfere from './datarequest';
import TempCalculation from './tempCalc';

const DomBuild = (() => {
  const renderDom = async cityValue => {
    const toggleTemp = document.querySelector('[toggle-temp]');
    const countryName = document.getElementById('country-name');
    const theTemperature = document.getElementById('temperature');
    const theCity = document.getElementById('city');
    const humid = document.querySelector('#humidity');
    const speed = document.getElementById('windspeed');
    const highTemp = document.getElementById('high-temp');
    const lowTemp = document.getElementById('low-temp');
    const data = await DataTransfere.getWeatherData(cityValue);

    const [
      city,
      temperature,
      country,
      humidity,
      windspeed,
      highTemperature,
      lowTemperature,
    ] = [
      data.name,
      data.main.temp,
      data.sys.country,
      data.main.humidity,
      data.wind.speed,
      data.main.temp_max,
      data.main.temp_min,
    ];

    const sunnyWeather = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("../dist/images/sunny-weather.jpeg") center center';
    const coldWeather = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("../dist/images/weather-bg.jpeg") center center';


    if(TempCalculation.tempInteger(temperature) > 20) {
      document.body.style.background = sunnyWeather;
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundSize = 'cover';
    } else {
      document.body.style.background = coldWeather;
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundSize = 'cover';
    }

    theCity.textContent = `${city}, `;
    countryName.textContent = `${country}`;
    humid.textContent = `${humidity}`;
    speed.textContent = `${TempCalculation.tempInteger(windspeed)}`;
    theTemperature.innerHTML = `${TempCalculation.tempInteger(temperature)}&deg;C`;
    highTemp.innerHTML = `${TempCalculation.tempInteger(highTemperature)}&deg;C`;
    lowTemp.innerHTML = `${TempCalculation.tempInteger(lowTemperature)}&deg;C`;

    toggleTemp.addEventListener('change', () => {
      if (toggleTemp.checked) {
        theTemperature.innerHTML = `${TempCalculation.toFahrenheit(temperature)}&deg;F`;
        highTemp.innerHTML = `${TempCalculation.toFahrenheit(highTemperature)}&deg;F`;
        lowTemp.innerHTML = `${TempCalculation.toFahrenheit(lowTemperature)}&deg;F`;
      } else {
        theTemperature.innerHTML = `${TempCalculation.tempInteger(temperature)}&deg;C`;
        highTemp.innerHTML = `${TempCalculation.tempInteger(highTemperature)}&deg;C`;
        lowTemp.innerHTML = `${TempCalculation.tempInteger(lowTemperature)}&deg;C`;
      }
    });
  };

  return { renderDom };
})();

export default DomBuild;
