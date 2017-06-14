import React, {Component} from 'react';

class CompanyName extends Component{
  render(){
    return(
      <div id="companyname">
        {/*TODO: replace with a props variable*/}
        <h2>{this.props.companyProfName}</h2>
      </div>
    );
  }
}

export default CompanyName;
