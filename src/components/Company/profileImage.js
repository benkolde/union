import React, {Component} from 'react';

//Just a picture of the company's logo.
class ProfileImage extends Component{
  render(){
    return(
      <div id="profilepic">
        <img src={this.props.companyProfUrl} alt={this.props.companyProfName} />
      </div>
    );
  }
}

export default ProfileImage;
