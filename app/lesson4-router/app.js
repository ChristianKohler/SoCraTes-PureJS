import MoviesView from './movies';
import SearchView from './search';

class AppRoot extends HTMLElement {
  createdCallback() {
    this.render();
  }
  
  render() {
    this.innerHTML = `
      <search-view></search-view>
    `;
  }
}

document.registerElement('app-root', AppRoot);