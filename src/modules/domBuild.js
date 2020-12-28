import DataTransfere from './datarequest'
import TempCalculation from './tempCalc'

const DomBuild = (() => {
  const renderDom = async cityValue => {
    const toggleTemp = document.querySelector('[toggle-temp]')
    const countryName = document.getElementById('country-name')
    const theTemperature = document.getElementById('temperature')
    const theCity = document.getElementById('city')
    const humid = document.querySelector('#humidity')
    const speed = document.getElementById('windspeed')
    const highTemp = document.getElementById('high-temp')
    const lowTemp = document.getElementById('low-temp')
    const data = await DataTransfere.getWeatherData(cityValue)

    const [
      city,
      temperature,
      country,
      humidity,
      windspeed,
      highTemperature,
      lowTemperature
    ] = [
      data.name,
      data.main.temp,
      data.sys.country,
      data.main.humidity,
      data.wind.speed,
      data.main.temp_max,
      data.main.temp_min
    ]

    theCity.textContent = `${city}`
    countryName.textContent = `${country}`
    humid.textContent = `${humidity}`
    speed.textContent = `${TempCalculation.tempInteger(windspeed)}`

    toggleTemp.addEventListener('change', () => {
      if (toggleTemp.checked) {
          theTemperature.innerHTML = `${TempCalculation.toFahrenheit(temperature)}&deg;F`;
          highTemp.innerHTML = `${TempCalculation.toFahrenheit(highTemperature)}&deg;F`;
          lowTemp.innerHTML = `${TempCalculation.toFahrenheit(lowTemperature)}&deg;F`;
      } else {
        theTemperature.innerHTML = `${TempCalculation.tempInteger(
          temperature
        )}&deg;C`
        highTemp.innerHTML = `${TempCalculation.tempInteger(
          highTemperature
        )}&deg;C`
        lowTemp.innerHTML = `${TempCalculation.tempInteger(
          lowTemperature
        )}&deg;C`
      }
    })

    // if (toggleTemp) {
    //   theTemperature.innerHTML = `${TempCalculation.tempInteger(temperature)}&deg;C`;
    //   highTemp.innerHTML = `${TempCalculation.tempInteger(highTemperature)}&deg;C`;
    //   lowTemp.innerHTML = `${TempCalculation.tempInteger(lowTemperature)}&deg;C`;
    // } else {
    //   theTemperature.innerHTML = `${TempCalculation.toFahrenheit(temperature)}&deg;F`;
    //   highTemp.innerHTML = `${TempCalculation.toFahrenheit(highTemperature)}&deg;F`;
    //   lowTemp.innerHTML = `${TempCalculation.toFahrenheit(lowTemperature)}&deg;F`;
    // }
  }

  return { renderDom }
})()

export default DomBuild
