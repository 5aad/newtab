import React from 'react';

import {pull_ad} from '../../js/ImageLogic.js';


class AdImage extends React.Component{
    state = {
        adSource : "https://new-tab-images.sfo2.digitaloceanspaces.com/ads/ad-02.png"
    }

    
  
  componentDidMount(){
      this.setState({adSource : pull_ad()})
  }

  render() {
     return (
        <img src={this.state.adSource} style={{width: '728px', hight: '90px', position: 'fixed', bottom: '10px', justifyContent: 'center'}}></img>
     )
  }
}

export default AdImage;
