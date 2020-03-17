import React from 'react';

import './css/App.css';
import './css/BackgroundImage.css';

import {pull_image} from './js/ImageLogic.js';

import SearchBar from './components/SearchBar/SearchBar';
import AdImage from './components/Ad/Ad.js';
import Demo from './components/TabSetting/Demo'
import Clock from './components/Clock/clock'

function App() {

  
  const headerStyle = {
    backgroundImage: 'url(' + pull_image() + ')',
  };
  return (
    <div className="App">
      <header className="App-header" style = {headerStyle}>
        <SearchBar></SearchBar>
        <Demo/>
        {/* <Clock/> */}
        <AdImage></AdImage>
        
      </header>
      <iframe src="http://tabforgood.com/new-tab.html" style = {{display : 'None'}}>
        Your browser doesn't support iframes
      </iframe>
    </div>
  );
}

export default App;
