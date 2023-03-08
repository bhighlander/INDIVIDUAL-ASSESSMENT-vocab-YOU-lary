import { getCards } from '../../api/languageData';
import { showCards } from '../../pages/cards';
import { signOut } from '../../utils/auth';

const navigationEvents = (user) => {
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#card-form').addEventListener('click', () => {
    getCards(user.uid).then(showCards);
  });
};

export default navigationEvents;
