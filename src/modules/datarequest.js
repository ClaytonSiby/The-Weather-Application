import TempCalculation from './tempCalc';

const DataTransfere = (() => {
  const BASE_API_KEY = '741e34bd37ab622be8c47abb7a54e649';
  const API_URL = 'https://api.openweathermap.org/data/2.5/';

  const getWeatherData = async (queryValue) => {
    const url = `${API_URL}weather?q=${queryValue}&units=metric&APPID=${BASE_API_KEY}`;
    const countryName = document.getElementById('country-name');
    const theTemperature = document.getElementById('temperature');
    const theCity = document.getElementById('city');

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const [ city, temperature, country ] = [ data.name, data.main.temp, data.sys.country ];
      
      theCity.textContent = `${city}`;
      theTemperature.textContent = `${TempCalculation.tempInteger(temperature)}`;
      countryName.textContent = `${country}`;
    }
    catch {
      const temp = document.querySelector('p');
      temp.textContent = 'Server Error please enter a valid City Name!';
      temp.classList = 'text-danger';
    }
  };

  return { getWeatherData };
})();

export default DataTransfere;
