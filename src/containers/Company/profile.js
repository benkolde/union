import React, {Component} from 'react';
import CompanyName from './../../components/Company/companyName.js';
import ProfileImage from './../../components/Company/profileImage.js';
import {connect} from 'react-redux';

class Profile extends Component{
  render(){
    if(!this.props.company){
      return(<div id="companybar"></div>);
    }
    let image = "images/" + this.props.company.replace(/[^A-Z0-9]+/ig, '') + ".png";
    image = image.toLowerCase();
    return(
      <div id="companybar">
        <ProfileImage companyProfUrl={image}/>
        <CompanyName companyProfName={this.props.company}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    company: state.activeCompany
  };
}

export default connect(mapStateToProps)(Profile);
