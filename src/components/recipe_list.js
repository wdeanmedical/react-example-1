import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, dispatch } from 'redux'
import _ from 'lodash'
import RecipeListItem from './recipe_list_item'
import {showRecipe} from '../actions'

class RecipeList extends Component {

   getRecipeItems() {
     return ( this.props.recipes.map(recipe => {
       return (
         <RecipeListItem
           recipe={recipe}
           key={recipe.title}
           onRecipeSelect={recipe => this.props.showRecipe(recipe.href)}
         />
       )
     })
   )}

  render() {
    return (
      <ul className="list-group">
         {this.getRecipeItems()}
      </ul>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showRecipe }, dispatch)
}

function mapStateToProps({ recipes }) {
  return { recipes }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)
