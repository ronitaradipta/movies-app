class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set submitEvent(event) {
    this._submitEvent = event;
    this.render();
  }

  emptyInput() {
    this.querySelector("#searchInput").value = "";
  }

  get value() {
    return this.querySelector("#searchInput").value;
  }

  render() {
    this.innerHTML = `
    <form action="" class="col-md-12 mt-4" id="searchForm">
          <div class="input-group input-group-md">
            <input
              type="search"
              class="form-control p-md-3"
              id="searchInput"
              placeholder="Search for movies.."
              aria-label="Search for movies"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-secondary bg-warning w-full text-black"
              type="submit"
              id="button-addon2"
            >
              Search
            </button>
          </div>
        </form>`;

    this.querySelector("#searchForm").addEventListener(
      "submit",
      this._submitEvent
    );
  }
}

customElements.define("search-bar", SearchBar);
