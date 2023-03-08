import { signOut } from '../../utils/auth';
import addLanguageForm from '../forms/addLanguageForm';

const navigationEvents = (user) => {
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#card-form').addEventListener('click', () => {
    addLanguageForm(user.uid);
  });
};

export default navigationEvents;
