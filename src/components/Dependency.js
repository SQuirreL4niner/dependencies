import React, { Component } from 'react';

import DependencyTest from '../components/DependencyTest';
import DependencyForm from '../components/DependencyForm';

class Dependency extends React.Component {
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

  onUpdateObject = (val) => {
    this.setState({
      array: [val]
    })
    console.log(this.state.array);
  };

  render() {
    return (
      <div>
        <br/>
        <br/>
        <DependencyForm style={style} onUpdateObject={this.onUpdateObject} onUpdateParent={this.onUpdateParent} onUpdateChild={this.onUpdateChild}/>
        <br />
        <DependencyTest style={style} passedObject={this.state.array} passedParent={this.state.fieldVal} passedChild={this.state.fieldVal2} />
      </div>
    )
  }
}

export default Dependency;


const style= {
  margin: 15
};
