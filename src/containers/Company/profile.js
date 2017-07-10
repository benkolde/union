import React, {Component} from 'react';
import CompanyName from './../../components/Company/companyName.js';
import ProfileImage from './../../components/Company/profileImage.js';
import {connect} from 'react-redux';
import {
  Link
} from 'react-router-dom';

/*second header that contains the Company's name + image.
  if Brandery admin is logged in, also contains link to go back to view with
  all of the companies in it.
*/
class Profile extends Component{
  render(){
    if(!this.props.company){
      return(<div id="companybar"></div>);
    }
    let image = "images/" + this.props.company.replace(/[^A-Z0-9]+/ig, '') + ".png";
    image = image.toLowerCase();
    if(this.props.user.loggedinbrand){
      //if user is a brandery admin include option to toggle back to all companies view
      return(
        <div id="companybar" className="branderyBar">
          <Link to={{pathname: "/brandery"}}>
            <img className="exit" src="images/Enter 1.svg" alt=""/>
            <h3 id="backtocomp">View All Companies</h3>
          </Link>
          <CompanyName companyProfName={this.props.company}/>
          <ProfileImage companyProfUrl={image}/>
        </div>
      );
    }else{
      return(
        <div id="companybar">
          <ProfileImage companyProfUrl={image} companyProfName={this.props.company}/>
          <CompanyName companyProfName={this.props.company}/>
          <h3 id="changepswd" onClick={()=>{this.props.onChangePassword();}}>Change Password</h3>
        </div>
      );
    }
  }
}

function mapStateToProps(state){
  return{
    company: state.activeCompany,
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(Profile);
