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
            <p class="card-text bold">${item.description}</p>
            <p class="card-text">${item.language}</p>
            <hr>
            <button>edit</button>
            <button>delete</button>
        </div>
      </div>`;
  });
  renderToDOM('#cards', domString);
};

export { showCards, emptyCards };
