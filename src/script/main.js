import $ from "jquery";
import DataSource from "./data/data-source";
import "./components/search-bar";
import "./components/movie-list";
import "./components/search-results";
import {
  searchForm,
  moviePopulartElement,
  movieTrendingElement,
  searchResultsElement,
  television,
} from "./elements";

const fetchDataPopular = async () => {
  try {
    const result = await DataSource.fetchData("movie", "popular");
    moviePopulartElement.movies = result;
  } catch (err) {
    console.log(err);
  }
};

const fetchDataTrending = async () => {
  try {
    const result = await DataSource.fetchData("trending", "movie/day");
    movieTrendingElement.movies = result;
  } catch (err) {
    console.log(err);
  }
};

const fetchTV = async () => {
  try {
    const result = await DataSource.fetchData("tv", "popular");
    television.movies = result;
  } catch (err) {
    console.log(err);
  }
};

const showSearchResults = (query) => {
  $("#search-container>.container>h2").text(`Search Results for "${query}"`);
  $("#search-container").removeClass("d-none");
  searchForm.emptyInput();
};

const fallbackResult = (message) => {
  searchResultsElement.renderError(message);
};

const submitForm = async (e) => {
  try {
    e.preventDefault();
    const query = searchForm.value;
    if (query) {
      const result = await DataSource.searchMovie(query);
      if (result.length > 0) {
        searchResultsElement.movies = result;
        showSearchResults(query);
        window.location.href = "#search-container";
      } else {
        showSearchResults(query);
        window.location.href = "#search-container";
        fallbackResult(`${query} is not found...`);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

searchForm.submitEvent = submitForm;

const viewData = () => {
  fetchDataPopular();
  fetchDataTrending();
  fetchTV();
};

// change navbar color after scroll
$(window).scroll(() => {
  if ($(document).scrollTop() > 50) {
    $("header").addClass("black-transparent");
  } else {
    $("header").removeClass("black-transparent");
  }
});

export default viewData;
