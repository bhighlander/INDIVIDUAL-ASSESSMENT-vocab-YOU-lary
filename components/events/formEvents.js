import { createCard, getCards, updateCard } from '../../api/cardData';
import { showCards } from '../../pages/cards';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-card')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        time_submitted: new Date().toLocaleString(),
        uid: user.uid,
      };

      createCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateCard(patchPayload).then(() => {
          getCards(user.uid).then(showCards);
        });
      });
    }

    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        time_submitted: new Date().toLocaleString(),
        uid: user.uid,
        firebaseKey,
      };
      updateCard(payload).then(() => {
        getCards(user.uid).then(showCards);
      });
    }
  });
};

export default formEvents;
