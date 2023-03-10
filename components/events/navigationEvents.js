import { getCards } from '../../api/cardData';
import { showCards } from '../../pages/cards';
import { signOut } from '../../utils/auth';
import addLanguageForm from '../forms/addLanguageForm';

const navigationEvents = (user) => {
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#card-form').addEventListener('click', () => {
    addLanguageForm(user.uid);
  });

  document.querySelector('#all-cards').addEventListener('click', () => {
    getCards(user.uid).then(showCards);
  });

  document.querySelector('#filter-buttons').addEventListener('click', (event) => {
    const language = event.target.id;

    getCards(user.uid).then((cards) => {
      const filteredCards = cards.filter((card) => card.language === language);
      showCards(filteredCards);
    });
  });
};

export default navigationEvents;
