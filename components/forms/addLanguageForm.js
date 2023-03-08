import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDOM';

const addLanguageForm = () => {
  clearDom();
  const domString = `
    <form id="submit-author" class="mb-4">
      <div class="form-group">
        <label for="image">Title</label>
        <input type="text" class="form-control" id="first_name" placeholder="First Name" required>
      </div>
      <div class="form-group">
        <label for="image">Definition</label>
        <input type="text" class="form-control" id="last_name" placeholder="Last Name" required>
      </div>
      <div class="form-group" id="select-language">
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addLanguageForm;
