import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor() {
    super()
    this.state = {
      page: <Profile />,
      pageString: "profile"
    }
  }

  navBarSelect = (e) => {
    let page = e.target.id
    if (page === "profile") {
      this.setState({page: <Profile />, pageString: page})
    } else if (page === "photo") {
      this.setState({page: <Photos />, pageString: page})
    } else if (page === "cocktail") {
      this.setState({page: <Cocktails />, pageString: page})
    } else if (page === "pokemon") {
      this.setState({page: <Pokemon />, pageString: page})
    }
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar navBar={this.navBarSelect}
          page={this.state.page}
          pageString={this.state.pageString}
        />
        {this.state.page}
      </div>
    )
  }

}

export default MainBox
