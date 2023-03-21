import "./movie-item";

class SearchResults extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
       .placeholder {
        font-weight: lighter;
        color: #fff;
        text-align: center;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      </style>
    `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
         * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          flex-wrap: nowrap;
          padding-bottom: 20px;
        }
      </style>
    `;
    this._movies.forEach((movie) => {
      const movieItemElement = document.createElement("movie-item");
      movieItemElement.movie = movie;
      this.shadowDOM.appendChild(movieItemElement);
    });
  }
}

customElements.define("search-results", SearchResults);
