import React from 'react';
import ReactDOM from 'react-dom';
//import Car from '../components/Car.js'


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  send = (event)=>{
    alert(event)
  }
  render() {
    return (
      <form>
      <h1>Hello {this.state.username}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      <input type="submit" onSubmit={this.state.send} />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));