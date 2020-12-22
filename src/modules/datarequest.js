const DataTransfere = (() => {
    // const envVariables = process.env;
    // const { API_URL, BASE_API_KEY } = envVariables;

    const BASE_API_KEY = '741e34bd37ab622be8c47abb7a54e649'
    const API_URL = 'http://api.openweathermap.org/data/2.5/weather'

    const url = `${API_URL}?q=London,uk&APPID=${BASE_API_KEY}`;

    const getWeatherData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }

    return { getWeatherData };
})();

export default DataTransfere;
