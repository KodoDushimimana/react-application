import React from 'react';
import ReactDOM from 'react-dom';



class Car extends React.Component{
  constructor(){
    super()
    this.state = {color:'red'}
  }
  render(){
    return <h2>Hi! This is my first React Component! I am hoping the color {this.state.color}</h2>
  }
}


ReactDOM.render(<Car />, document.getElementById('root'))