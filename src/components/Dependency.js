import React, { Component } from 'react';

import DependencyTest from '../components/DependencyTest';
import DependencyForm from '../components/DependencyForm';

class Dependency extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldVal: "",
      fieldVal2: ""
    }
  }

  onUpdateParent = (val) => {
    this.setState({
      fieldVal: val
    })
  };

  onUpdateChild = (val) => {
    this.setState({
      fieldVal2: val
    })
  };

  render() {
    return (
      <div>
        <h2>Parent</h2>
        Value in Parent Component State: {this.state.fieldVal}
        <br/>
        <br/>
        <h2>Child</h2>
        Value in Child Component State: {this.state.fieldVal2}
        <br/>
        <br/>
        <DependencyForm style={style} onUpdateParent={this.onUpdateParent} onUpdateChild={this.onUpdateChild}/>
        <br />
        <DependencyTest style={style} passedParent={this.state.fieldVal} passedChild={this.state.fieldVal2} />
      </div>
    )
  }
}

export default Dependency;


const style= {
  margin: 15
};