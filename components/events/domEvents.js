import { deleteCard, getCards, getSingleCard } from '../../api/languageData';
import { showCards } from '../../pages/cards';
import addLanguageForm from '../forms/addLanguageForm';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-card')) {
      if (window.confirm('Confirm Delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteCard(firebaseKey).then(() => {
          getCards(user.uid).then(showCards);
        });
      }
    }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-card-btn')) {
      addLanguageForm();
    }

    // TODO: CLICK EVENT EDITING/UPDATING A BOOK
    if (e.target.id.includes('edit-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((cardObj) => addLanguageForm(user.uid, cardObj));
    }
  });
};

export default domEvents;
