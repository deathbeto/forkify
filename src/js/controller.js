import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/SearchView.js';
import resultsView from './views/ResultsView.js';
import paginationView from './views/paginationView.js';

// CONTROLADOR DE RECETA
async function controlRecipes() {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner();

    await model.loadRecipe(id);
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
}

// CONTROLADOR DE RESULTADOS DE BÚSQUEDA
async function controlSearchResults() {
  try {
    resultsView.renderSpinner();

    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);

    // Mostrar resultados actuales (página 1 por defecto)
    resultsView.render(model.getSearchResultsPage());

    // Mostrar botones de paginación
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
}

// CONTROLADOR DE CAMBIO DE PÁGINA
function controlSearchResultsPage(goToPage) {
  resultsView.render(model.getSearchResultsPage(goToPage));
  paginationView.render(model.state.search);
}

// INICIALIZADOR
function init() {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlSearchResultsPage);
}
init();
