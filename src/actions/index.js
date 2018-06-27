import axios from 'axios'

export const FETCH_RECIPES = 'fetch_recipes'
export const SHOW_RECIPE = 'show_recipe'

export function fetchRecipes(term) {
  const url = `/recipe-puppy-api/?q=${term}`
  const request = axios.get(url)
  return {
    type: FETCH_RECIPES,
    payload: request,
  }
}

export function showRecipe(url) {
  return {
    type: SHOW_RECIPE,
    payload: url,
  }
}

