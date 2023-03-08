import { getSingleCard } from '../../api/cardData';
import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDOM';

const languages = ['html', 'css', 'javascript', 'python', 'php', 'c#'];

const languageOptions = languages.map((language) => `<option value="${language}">${language}</option>`).join('');

const addCardForm = (user, obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" class="form-control" id="title" aria-describedby="cardTitle" placeholder="Enter Card Title" value="${obj.title || ''}" required>
    </div>
    <div class="form-group">
      <label for="definition">Definition</label>
      <textarea class="form-control" placeholder="Card Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
    </div>
    <div class="form-group">
      <label for="language">Language</label>
      <select class="form-control" id="language" required>
        <option value="">Select a language</option>
        ${languageOptions}
      </select>
    </div>
    <button type="submit" class="btn btn-primary">Submit Card</button>
  </form>`;

  renderToDOM('#form-container', domString);
  getSingleCard(user, `${obj.author_id || ''}`);
};

export default addCardForm;
