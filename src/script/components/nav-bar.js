class NavigationBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark py-3">
        <div class="container">
          <a class="navbar-brand" href="/"> OurMovies </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">OurMovies</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#popular-section" id="popular-link">
                  Most Popular
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#trending-section" id="trending-link"> Trending </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#television-section" id="tv-link"> TV Shows </a>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("nav-bar", NavigationBar);
