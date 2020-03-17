import React from 'react';

import './SearchBar.css';

import ReactGA from 'react-ga';



var searchGoogle = function(inputQuery){
  var remove_space = inputQuery.replace(" ", "%20");
  var google_prefix = "https://www.google.com/search?q=";
  window.location.replace(google_prefix + remove_space);
}

class SearchBar extends React.Component{

  componentDidMount(){
    /*
    ReactGA.initialize('UA-157539580-1');

    // https://stackoverflow.com/questions/16135000/how-do-you-integrate-universal-analytics-in-to-chrome-extensions/22152353#22152353
    ReactGA.ga('set', 'checkProtocolTask', null);
    
    ReactGA.pageview("/new-tab");
    */
  }

  sendToSearch(e){
    console.log(e.target.value);
  }

  handleKeyPress(e){
    if(e.key === "Enter"){
      console.log(e.target.value);
      searchGoogle(e.target.value);
    }
  }

  render() {
     return (
      <fieldset class="field-container">
        <input type="text" placeholder="Search Google" class="field" onClick={this.sendToSearch} onKeyPress={this.handleKeyPress} style={{fontSize : '20px'}}/>
        <div class="icons-container">
        <div class="icon-search"></div>
        <div class="icon-close">
            <div class="x-up"></div>
            <div class="x-down"></div>
        </div>
        </div>
      </fieldset>
     );
     }
}

export default SearchBar;
