import React from "react";
import Clock from 'react-digital-clock';
import "./clock.css"


export default class clock extends React.Component{
    render(){
       
    return(
        <div className="clockPostion">
        <Clock format= {'hh-mm'} />
        </div>
    );
}
}
