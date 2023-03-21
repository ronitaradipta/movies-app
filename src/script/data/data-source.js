import axios from "axios";
import { BASE_URL, API_KEY } from "../services/services";

class DataSource {
  static searchMovie(query) {
    return axios(
      `${BASE_URL}/3/search/movie?query=${query}&api_key=${API_KEY}`
    ).then((response) => {
      if (response) {
        return Promise.resolve(response.data.results);
      } else {
        return Promise.reject(new Error("something bad happened"));
      }
    });
  }

  static fetchData(path, param) {
    return axios(`${BASE_URL}/3/${path}/${param}?api_key=${API_KEY}`).then(
      (response) => {
        if (response) {
          return Promise.resolve(response.data.results);
        } else {
          return Promise.reject(new Error("an error occurred while fetching"));
        }
      }
    );
  }
}

export default DataSource;
