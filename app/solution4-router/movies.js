import MovieApi from './movie-api';
import MovieTile from './movie-tile';
import router from './router';

class MoviesView extends HTMLElement {
  createdCallback() {
    let duration = location.hash.split('=').pop();

    if(duration) {
      MovieApi.searchByDuration(duration).then(data => this.render(data));
    } else {
      router.navigate("search");
    }
  }

  render(data) {
    this.innerHTML = `
      <a href="/#/search"><button type="submit">New Search</button></a>
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

export default document.registerElement('movies-view', {
  prototype: MoviesView.prototype
});
