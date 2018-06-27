import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise'
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import SearchBar from './components/search_bar'
import RecipeList from './components/recipe_list'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

class App extends Component {

  render() {
    return (
      <div className="main-container">
        <SearchBar />
        <RecipeList />
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.querySelector('.container'))
