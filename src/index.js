import 'bootstrap/dist/css/bootstrap.min.css';
import DomBuild from './modules/domBuild';

const submitForm = document.querySelector('#view-data');

setTimeout(DomBuild.renderDom('Sandton'),500);

submitForm.addEventListener('click', e => {
  const formInput = document.querySelector('#search').value;
  e.preventDefault();
  if (formInput) {
    setTimeout(DomBuild.renderDom(formInput),500);
  }
});
