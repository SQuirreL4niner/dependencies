import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class DependencyTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkDependency: ''
    }
  };

  handleClick = (event) => {
    //console.log(this.state.checkDependency);
    //console.log('hmmm' + JSON.stringify(this.props.passedObject));
    let array = [];
    this.props.passedObject[0].forEach((iter, index) => {
      if(iter.fieldVal == this.state.checkDependency){
        array = iter.fieldVal2.split(" ").map((item) => item.trim());
        // console.log(array);
        // array.splice(index, 1);
        // console.log('after splicing the array ' + array)
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
    mySet.forEach(function(value) {
      console.log(value);
    });
    // if(this.props.passedParent.includes(this.state.checkDependency)){
    //   //console.log('there')
    // }else console.log('not there')
  };

  updateCheckDepdendency = (val) => {
    //this.props.onUpdateChild(e.target.value);
    this.setState({checkDependency: val.target.value})
    console.log(this.state.checkDependency)
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <br/><br/>
          <TextField type="text" hintText="Result" style={style} floatingLabelText="Result"
          value={this.state.checkDependency} onChange={this.updateCheckDepdendency}/>
          <RaisedButton label="Check Dependencies" style={style} primary={true} style={style}
                      onClick={(event) => this.handleClick(event)}/>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default DependencyTest;


const style= {

};
