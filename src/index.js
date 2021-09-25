import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

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

ReactDOM.render(<MyHeader />, document.getElementById('root'));