import domBuilder from '../components/shared/domBuilder';
import domEvents from '../components/events/domEvents';
import formEvents from '../components/events/formEvents';
import navbar from '../components/shared/navBar';
import logoutButton from '../components/buttons/logoutButton';
import navigationEvents from '../components/events/navigationEvents';
import { showCards } from '../pages/cards';
import { getCards } from '../api/cardData';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navbar();
  logoutButton();
  navigationEvents(user);

  getCards(user.uid).then(showCards);
};
export default startApp;
