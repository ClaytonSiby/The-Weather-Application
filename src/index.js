import 'bootstrap/dist/css/bootstrap.min.css';
import DataTransfere from './modules/datarequest';

const submitForm = document.querySelector('#view-data');

submitForm.addEventListener('click', e => {
  const formInput = document.querySelector('#search').value;
  e.preventDefault();
  if (formInput) {
    DataTransfere.getWeatherData(formInput);
  }
});
