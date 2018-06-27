import { SHOW_RECIPE, FETCH_RECIPES }  from '../actions/index'
const MAX_RESULTS = 20

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_RECIPES:
      return action.payload.data.results.slice(0, MAX_RESULTS)
    case SHOW_RECIPE:
      const win = window.open(action.payload, '_blank')
      win.focus()
      return state
  }
  return state
}
