import { IMAGE_PATH } from "../services/services";
import { getClassByRating, convertDate, cardStyle } from "../elements";

class MovieItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    const {
      id,
      poster_path,
      title,
      release_date,
      vote_average,
      overview,
      original_language,
      name,
      first_air_date,
    } = this._movie;

    this.shadowDOM.innerHTML = `
      ${cardStyle}
      <div id=a-${id} class="card-movie" style="background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.16880255520176823) 65%
    ), url('${IMAGE_PATH}${poster_path}'), no-repeat, center;">
          <h3 class="card-title">${!name ? title : name}</h3>
          <div class="card-subtitle">
            <p>${convertDate(
              !first_air_date ? release_date : first_air_date
            )}</p>
            <div class="rating ${getClassByRating(vote_average)}">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <span>${vote_average.toFixed(1)}</span>
            </div>
          </div>
          <div class="overview">
           <h4>Overview</h4>
           <p>${overview}</p>
          </div>
          <span class="language">${original_language}</span>
        </div>
    `;
  }
}

customElements.define("movie-item", MovieItem);
