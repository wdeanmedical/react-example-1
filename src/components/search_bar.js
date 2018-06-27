import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, dispatch } from 'redux'
import _ from 'lodash'
import { fetchRecipes } from '../actions'


class SearchBar extends Component {

  state = {term: ''}

  render() {
    return (
      <div className="search-bar">
        <input
          autoFocus
          value={this.state.term}
          onChange={e => this.onInputChange(e.target.value)}
          placeholder="Search By Ingredients..."
        />
      </div>
    )
  }

  onInputChange(term) {
    const debouncedFetchRecipes = _.debounce(term => { this.props.fetchRecipes(term) }, 300)
    this.setState({ term })
    debouncedFetchRecipes(term)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRecipes }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
