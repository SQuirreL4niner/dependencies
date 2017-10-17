import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import DependencyTest from '../components/DependencyTest';
import Dependency from '../components/Dependency';

const array = [];
class DependencyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldVal: "",
      fieldVal2: "",
      array: [{
        fieldVal: "",
        fieldVal2: "",
      }]
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

  handleClick = (e) => {
    array.push({fieldVal:this.state.fieldVal, fieldVal2:this.state.fieldVal2});
    this.props.onUpdateObject(array);
    this.setState({array:array});
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
              <TextField
                style={style}
                type="text"
                placeholder="type here"
                onChange={this.updateParent}
                value={this.state.fieldVal}
              />
              <TextField
                style={style}
                type="text"
                placeholder="type here"
                onChange={this.updateChild}
                value={this.state.fieldVal2}
              />
              <RaisedButton label="Enter Dependencies" style={style} primary={true} style={style}
                          onClick={(event) => this.handleClick(event)}/>
      </MuiThemeProvider>
      </div>
    )
  }
}

export default DependencyForm;


const style= {
  margin: 15
};
