import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import DependencyTest from '../components/DependencyTest';
import Dependency from '../components/Dependency';

class DependencyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldVal: "",
      fieldVal2: ""
    }
  }

  updateParent = (e) => {
    this.props.onUpdateParent(e.target.value);
    this.setState({fieldVal: e.target.value});
  };

  updateChild = (e) => {
    this.props.onUpdateChild(e.target.value);
    this.setState({fieldVal2: e.target.value})
  }

  render() {
    return (
      <div>
        <h4>Child</h4>
        <input
          type="text"
          placeholder="type here"
          onChange={this.updateParent}
          value={this.state.fieldVal}
        />
        <input
          type="text"
          placeholder="type here"
          onChange={this.updateChild}
          value={this.state.fieldVal2}
        />
      </div>
    )
  }
}

export default DependencyForm;


const style= {
  margin: 15
};
