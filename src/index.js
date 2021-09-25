import React from 'react';
import ReactDOM from 'react-dom';
//import Car from '../components/Car.js'


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mycar: 'Ford'
    };
  }
  render() {
    return (
      <form>
      <select value={this.state.mycar}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));