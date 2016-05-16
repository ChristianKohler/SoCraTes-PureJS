import MoviesView from './movies';

class AppRoot extends HTMLElement {
  createdCallback() {
    this.render();
  }
  
  render() {
    this.innerHTML = `
      <movies-view></movies-view>
    `;
  }
}

document.registerElement('app-root', AppRoot);