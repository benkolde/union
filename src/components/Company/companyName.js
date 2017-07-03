import React, {Component} from 'react';

//Simply displays the name of the company in view
class CompanyName extends Component{
  render(){
    return(
      <div id="companyname">
        <h2>{this.props.companyProfName}</h2>
      </div>
    );
  }
}

export default CompanyName;
