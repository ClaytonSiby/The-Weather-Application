import 'bootstrap/dist/css/bootstrap.min.css';
import DomBuild from './modules/domBuild';

const submitForm = document.querySelector('#view-data');


submitForm.addEventListener('click', e => {
  const formInput = document.querySelector('#search').value;
  e.preventDefault();
  if (formInput) {
    DomBuild.renderDom(formInput);
  }
});
