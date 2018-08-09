import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'


const PageName = [<Profile />, <Photos/>, <Cocktails/>, <Pokemon/>];
class MainBox extends React.Component {
  constructor(){
    super()
    this.state={
      currentPageNamendex: 0
  
    }
  }

  updateIndex= (newIndex) =>{
    this.setState({ currentPageNamendex: newIndex})
  }


  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    // const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar pageIndex= {this.state.currentPageNamendex} updateIndex={this.updateIndex} />
        {PageName[this.state.currentPageNamendex]}
      </div>
    )
  }

}

export default MainBox
