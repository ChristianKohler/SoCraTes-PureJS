import MovieTile from './movie-tile';
import MovieApi from './movie-api';

class MoviesView extends HTMLElement {
  createdCallback() {
    MovieApi.searchByDuration(3420).then(data => this.render(data));
  }

  render(data) {
    this.innerHTML = `
      <div class="movies-container">
        ${data.movies.map(this.renderMovie).join("")}
      </div>
    `;
  }

  renderMovie(movie) {
    return `
      <movie-tile
        image-url="${movie.omdbImgUrl}"
        title="${movie.title}"
        runtime="${movie.runtimeOriginal}"
        rating="${movie.imdbVotes}">
      </movie-tile>
    `;
  }
}

export default document.registerElement('movies-view', MoviesView);
