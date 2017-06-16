import React, {Component} from 'react';
import CompanyName from './../../components/Company/companyName.js';
import ProfileImage from './../../components/Company/profileImage.js';
import {connect} from 'react-redux';

class Profile extends Component{
  render(){
    if(!this.props.company){
      return(<div id="companybar"></div>);
    }
    return(
      <div id="companybar">
        <ProfileImage companyProfUrl={this.props.company.image}/>
        <CompanyName companyProfName={this.props.company.name}/>
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
