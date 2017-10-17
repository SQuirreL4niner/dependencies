import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class DependencyTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkDependency: '',
      array: []
    }
  };

  handleClick = (event) => {
    let array = [];
    this.props.passedObject[0].forEach((iter, index) => {
      if(iter.fieldVal == this.state.checkDependency){
        array = iter.fieldVal2.split(" ").map((item) => item.trim());
        return search(array);
      } else return search(iter.fieldVal2.split(" ").map((item) => item.trim()));
        function search(results){
          for(let parse of iter.fieldVal){
            if(array.includes(parse)){
              var temp = iter.fieldVal2.split(" ").map((item) => item.trim())
              array = array.concat(temp);
            } else console.log('done');
          }
      }
    })
    var i = array.indexOf(this.state.checkDependency);
    if(i != -1) {
    	array.splice(i, 1);
    }
    var mySet = new Set(array);
    this.setState({array:Array.from(mySet)});
  };

  updateCheckDepdendency = (val) => {
    this.setState({checkDependency: val.target.value});
    console.log(this.state.checkDependency);
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <br/><br/>
          <TextField type="text" hintText="Result" style={style} floatingLabelText="Result"
          value={this.state.checkDependency} onChange={this.updateCheckDepdendency}/>
          <RaisedButton label="Check Dependencies" primary={true} style={style}
                      onClick={(event) => this.handleClick(event)}/>
          <br/><br/>
          <h2>Dependencies for {this.state.checkDependency}</h2>
          <ul>
            {this.state.array.map(function(name, index){
                return <li key={ index }>{name}</li>;
              })}
          </ul>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default DependencyTest;


const style= {
  margin: 45
};
