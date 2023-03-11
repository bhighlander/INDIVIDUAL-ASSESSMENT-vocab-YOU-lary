import renderToDOM from '../../utils/renderToDOM';

const filterBtn = () => {
  const domString = `
    <button id="all" class="btn btn-primary">All</button>
    <button id="html" class="btn btn-primary">HTML</button>
    <button id="css" class="btn btn-primary">CSS</button>
    <button id="javascript" class="btn btn-primary">JavaScript</button>
    <button id="python" class="btn btn-primary">Python</button>
    <button id="php" class="btn btn-primary">PHP</button>
    <button id="c#" class="btn btn-primary">C#</button>
  `;

  renderToDOM('#filter-buttons', domString);
};

export default filterBtn;
