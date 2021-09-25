import React from 'react';
import ReactDOM from 'react-dom';
//import Car from '../components/Car.js'


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: 'The content of a textarea goes in the value attribute'
    };
  }
  render() {
    return (
      <form>
      <textarea cols= "60" rows =" 40"
       value={this.state.description} />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));