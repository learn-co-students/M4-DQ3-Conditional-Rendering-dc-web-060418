import React from 'react'

const MenuBar = (props) => {

  /*

  The 'a' tags below are the menu items. Think about the way a menu
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  const activeComponent = (menuItem) => {
    return (menuItem === props.pageString ? "item active" : "item")
  }

  return (
    <div className="ui four item menu">
      <a className={activeComponent("profile")} id="profile" onClick={props.navBar}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className={activeComponent("photo")} id="photo" onClick={props.navBar}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={activeComponent("cocktail")} id="cocktail" onClick={props.navBar}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={activeComponent("pokemon")} id="pokemon" onClick={props.navBar}>
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
