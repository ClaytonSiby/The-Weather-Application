const DataTransfere = (() => {
  const BASE_API_KEY = '741e34bd37ab622be8c47abb7a54e649';
  const API_URL = 'http://api.openweathermap.org/data/2.5/weather';

  const getWeatherData = async (queryValue) => {
    try {
      const url = `${API_URL}?q=${queryValue}&APPID=${BASE_API_KEY}`;
      const temp = document.querySelector('p');
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data)
      const [ temperature, country ] = [ data.main.temp, data.sys.country ];
      temp.innerHTML = `${temperature} &deg; ,${country}`;
      temp.classList = 'text-success';
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
