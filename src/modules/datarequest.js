const DataTransfere = (() => {
  const BASE_API_KEY = '741e34bd37ab622be8c47abb7a54e649';
  const API_URL = 'https://api.openweathermap.org/data/2.5/';

  const getWeatherData = async queryValue => {
    const url = `${API_URL}weather?q=${queryValue}&units=metric&APPID=${BASE_API_KEY}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      const err = document.querySelector('#error');
      err.textContent = 'Server Error, please try a valid city name!';
      err.classList = 'text-danger';

      return err;
    }
  };

  return { getWeatherData };
})();

export default DataTransfere;
