import TempCalculation from './tempCalc';

const DataTransfere = (() => {
  const BASE_API_KEY = '741e34bd37ab622be8c47abb7a54e649';
  const API_URL = 'https://api.openweathermap.org/data/2.5/';

  const getWeatherData = async queryValue => {
    const url = `${API_URL}weather?q=${queryValue}&units=metric&APPID=${BASE_API_KEY}`;
    const countryName = document.getElementById('country-name');
    const theTemperature = document.getElementById('temperature');
    const theCity = document.getElementById('city');
    const humid = document.querySelector('#humidity');
    const speed = document.getElementById('windspeed');
    const highTemp = document.getElementById('high-temp');
    const lowTemp = document.getElementById('low-temp');

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
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

      theCity.textContent = `${city}`;
      theTemperature.textContent = `${TempCalculation.tempInteger(temperature)}`;
      countryName.textContent = `${country}`;
      humid.textContent = `${humidity}`;
      speed.textContent = `${TempCalculation.tempInteger(windspeed)}`;
      highTemp.innerHTML = `${TempCalculation.tempInteger(highTemperature)}&deg;C`;
      lowTemp.innerHTML = `${TempCalculation.tempInteger(lowTemperature)}&deg;C`;
    } catch(error) {
      const err = document.querySelector('#error');
      err.textContent = `Server Error, please try a valid city name!`;
      err.classList = 'text-danger';
    }
  };

  return { getWeatherData };
})();

export default DataTransfere;
