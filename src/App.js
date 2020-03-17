import React from 'react';

import './css/App.css';
import './css/BackgroundImage.css';

import {pull_image} from './js/ImageLogic.js';

import SearchBar from './components/SearchBar/SearchBar';
import AdImage from './components/Ad/Ad.js';
import Demo from './components/TabSetting/Demo'
import Clock from './components/Clock/clock'

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      hideClock:false,
      hideSearch:false
  }
  
}
parentFunction=(data_from_child)=>{
  this.setState({hideSearch:data_from_child});
  console.log(data_from_child)
}
parentFunction2=(data_from_child)=>{
  this.setState({hideClock:data_from_child});
  console.log(data_from_child)
}
render(){
  const headerStyle = {
    backgroundImage: 'url(' + pull_image() + ')',
  };
  return (
    <div className="App">
      <header className="App-header" style = {headerStyle}>
      {
          this.state.hideSearch?
          (
            <></>
          ):(
            <SearchBar/>)
        }
        {/* clock component */}

{
          this.state.hideClock?
          (
            <></>
          ):(<Clock/>)
        }
        <Demo searchHide={this.parentFunction} clockHide={this.parentFunction2}/>

        
        <AdImage/>
        
      </header>
      <iframe src="http://tabforgood.com/new-tab.html" style = {{display : 'None'}}>
        Your browser doesn't support iframes
      </iframe>
    </div>
  );
}
}

