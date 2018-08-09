import React from 'react'

const MenuBar = ({pageIndex, updateIndex}) => {

  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

pageIndex= {this.state.currentPageNamendex} updateIndex={this.updateIndex} 

  */

  return (
    <div className="ui four item menu">
      <a className={"item" + (pageIndex === 0 ? " active" : "")} id="profile" onClick={() => {updateIndex(0)}}>
        <i className="user large icon" id="profile" />
      </a>

      <a className={"item" + (pageIndex === 1 ? " active" : "")} id="photo"onClick={() => {updateIndex(1)}}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={"item" + (pageIndex === 2 ? " active" : "")} id="cocktail" onClick={() => {updateIndex(2)}}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={"item" + (pageIndex === 3 ? " active" : "")} id="pokemon" onClick={() => {updateIndex(3)}}> 
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )




}



export default MenuBar
