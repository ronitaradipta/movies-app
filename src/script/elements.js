const searchForm = document.querySelector("search-bar");
const moviePopulartElement = document.querySelector("#popular");
const movieTrendingElement = document.querySelector("#trending");
const searchResultsElement = document.querySelector("search-results");
const television = document.querySelector("#television");

const cardStyle = `<style>
        ::-webkit-scrollbar {
            height: 8px;
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            background: transparent;
          }

          ::-webkit-scrollbar-thumb {
            background-color: rgb(158, 158, 158);
            border-radius: 20px;
          }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }
        :host {
          min-width: 25%;
          position: relative;
          overflow: hidden;
        }

        @media screen and (max-width: 1000px) {
          :host {
            min-width: 50%;
          }
        }

        @media screen and (max-width: 400px) {
          :host {
            min-width: 60%;
          }
          .card-movie {
            height: 250px !important;
          }
          h3 {
            font-size: 18px;
          }
        }

        .yellow {
          color: #ffbf00;
        }

        .red {
          color: #dc2626;
        }

        .green {
          color: #22c55e;
        }

        .overview {
          position: absolute;
          top: 0;
          left: 0;
          min-height: 100%;
          min-width: 100%;
          background-color: rgba(0, 0, 0, 0.514);
          padding: 20px;
          opacity: 0;
          transition: all 0.5s ease;
        }

        .card-movie {
          height: 350px;
          padding: 20px;
          background-size: cover !important;
          cursor: pointer;
          display: flex;
          border-radius: 12px;
          flex-direction: column;
          justify-content: end;
          color : white;
          position: relative;
        }

        .card-movie:hover {
          overflow: auto;
        }

        .card-movie:hover .overview {
          opacity: 1;
        }

        .card-movie:hover .card-title,
        .card-movie:hover .card-subtitle,
        .card-movie:hover .rating,
        .card-movie:hover .language {
          display: none;
        }

        .card-subtitle {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .language {
          position: absolute;
          top: 5%;
          right: 5%;
          display: block;
          padding: 4px 6px;
          background-color: rgba(0, 0, 0, 0.511);
          text-transform: uppercase;
          border-radius : 4px
        }
        h3 {
          font-size: 24px;
          font-weight: 500;
          margin-bottom: 6px;
          white-space: nowrap; 
          overflow: hidden; 
          text-overflow: ellipsis; 
        }
        h4 {
          font-size: 20px;
          margin-bottom: 8px;
        }
        p {
          font-weight: 300;
        }
      </style>`;

const getClassByRating = (rating) => {
  if (rating >= 8) {
    return "green";
  } else if (rating >= 5) {
    return "yellow";
  } else {
    return "red";
  }
};

const convertDate = (date) => {
  const time = new Date(date);
  return time.getFullYear();
};

export {
  searchForm,
  moviePopulartElement,
  movieTrendingElement,
  searchResultsElement,
  television,
  cardStyle,
  getClassByRating,
  convertDate,
};
