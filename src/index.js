import React from 'react';
import ReactDOM from 'react-dom';
import Car from './Car.js'


class Garage extends React.Component{
  render(){
    return <h1> This is a Garage Component</h1>
  }
}


ReactDOM.render(
  <Car color="red" model ="Ford"/>,
  document.getElementById('root')
)