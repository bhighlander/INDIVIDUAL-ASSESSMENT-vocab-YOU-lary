import { deleteCard, getCards, getSingleCard } from '../../api/cardData';
import { showCards } from '../../pages/cards';
import addLanguageForm from '../forms/addLanguageForm';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Confirm Delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteCard(firebaseKey).then(() => {
          getCards(user.uid).then(showCards);
        });
      }
    }

    if (e.target.id.includes('edit-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((cardObj) => addLanguageForm(user.uid, cardObj));
    }
  });
};

export default domEvents;
