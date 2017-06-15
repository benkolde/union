import React, {Component} from 'react';
import CompanyName from './../../components/Company/companyName.js';
import ProfileImage from './../../components/Comopany/profileImage.js';

class Profile extends Component{
  render(){
    return(
      <div id="companybar">
        <ProfileImage companyProfUrl={this.props.companyProfUrl}/>
        <CompanyName companyProfName={this.props.companyProfName} />
      </div>
    );
  }
}

export default Profile;
