import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const emptyCards = () => {
  const domString = '<h1>No Cards</h1>';
  renderToDOM('#cards', domString);
};

const showCards = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
            <p class="card-text bold">${item.definition}</p>
            <p class="card-text">${item.language}</p>
            <hr>
            <i id="edit-card-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info">📝</i>
            <i id="delete-card-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt">❌</i>
            <hr>
            <p class="card-text">${item.time_submitted}</p>
        </div>
      </div>`;
  });
  renderToDOM('#cards', domString);
};

export { showCards, emptyCards };
