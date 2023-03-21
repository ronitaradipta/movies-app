import "./movie-item";

class MovieList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set movies(movies) {
    this._movies = movies;
    this.render();
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

customElements.define("movie-list", MovieList);
