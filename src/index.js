import React from 'react';
import ReactDOM from 'react-dom';
//import Car from '../components/Car.js'


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: 'here', number: '' };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value},
      
      
    );
  }

  onNumberChange = (event) =>{
    this.setState({number: event.target.value})
  }
  backgroundColorChange =(event) =>{
    this.setState({color:event.target.value})
  }
  
  render() {
    return (
      <form>
      <h1>Hello {this.state.username}</h1>
      <h2>number is {this.state.number} </h2>
      <p>Enter your name:</p>
      <input type='text' onChange={this.myChangeHandler} /><br />
      <label htmlFor="name">Name</label>
      <input type="text" /><br />
      <label htmlFor="password">Password</label>
      <input type="password" /> <br />
      <label htmlFor="number">Number</label>
      <input type="number" onChange ={this.onNumberChange} /><br />
      <label htmlFor="date"> Start Date</label>
      <input type="date" /><br />
      <label htmlFor="endDate">End Date</label>
      <input type="date" /> <br />
      <input type="color" onChange={this.state.backgroundColorChange}/>

      <input type="submit"  />

      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));