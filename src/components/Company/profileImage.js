import React, {Component} from 'react';

class ProfileImage extends Component{
  render(){
    return(
      <div id="profilepic">
        <img src={this.props.companyProfUrl} alt="" />
      </div>
    );
  }
}

export default ProfileImage;
