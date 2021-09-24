import React from "react";
import ReactDOM from "react-dom";


class Car extends React.Component{
 
    render(){
      return <h2>This is car has a {this.props.color} color and she is a {this.props.model} Model</h2>
  }

  
}
  export default Car

