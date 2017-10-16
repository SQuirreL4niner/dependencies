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
    console.log(this.state.checkDependency)
    var flag = false;
    //for(this.props.passsedChild)
    if(this.props.passedParent.includes(this.state.checkDependency)){
      console.log('there')
    }else console.log('not there')
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
  margin: 100
};
