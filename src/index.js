import React from 'react';
import ReactDOM from 'react-dom';
import Car from './App.js'
import './App.css'
import './mysass.scss'

class MyHeader extends React.Component {
  render() {
    const myStyle ={
      color: "white",
      fontSize: "25px",
      backgroundColor: "DodgerBlue",
      fontFamily:"Arial",
      textAlign:"Center"
    }
    return (
      <div>
      <h1 style={myStyle}>Hello Style!</h1>
      <p style={{color:"white"}, {textAlign:"center"},{backgroundColor: "black"}}>Add a little style!</p>
      </div>
    );
  }
}

ReactDOM.render(<Car />, document.getElementById('root'));