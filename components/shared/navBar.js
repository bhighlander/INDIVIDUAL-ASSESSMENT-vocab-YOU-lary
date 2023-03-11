import renderToDOM from '../../utils/renderToDOM';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
      <div class="container-fluid">
        <a class="nav-link" href="#" id="all-cards">
          Vocab-YOU-Lary<span class="sr-only">(current)</span>
        </a>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div class="navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="card-form">
                Create Entry<span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <span class="navbar-text">
            <div id="logout-button"></div>
          </span>
        </div>
      </div>
    </nav>`;
  renderToDOM('#navigation', domString);
};

export default navBar;
