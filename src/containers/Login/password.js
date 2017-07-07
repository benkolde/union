import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeUser} from '../../actions/index.js';
import {Redirect} from 'react-router';
import {
  Link
} from 'react-router-dom';
import "./login.css";
let CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

class Password extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      oldpassword: '',
      newpassword: '',
      cleared: true
    }
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onOldPasswordChange = this.onOldPasswordChange.bind(this);
    this.onNewPasswordChange = this.onNewPasswordChange.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    let credentials = {"new_email" : this.state.email , "old_password" : this.state.oldpassword, "new_password": this.state.newpassword};
    this.props.changeUser(credentials);
    this.setState({email: '', oldpassword: '', newpassword: '', cleared: false});
  }

  onEmailChange(event){
    this.setState({email: event.target.value});
  }

  onOldPasswordChange(event){
    this.setState({oldpassword: event.target.value});
  }

  onNewPasswordChange(event){
    this.setState({newpassword: event.target.value});
  }

  render(){
    let Content =
      <div className="login" id="passwordform">
        <img src="images/fucking x.svg" alt="" onClick={()=>{this.props.onChangePassword();}}/>
        <form onSubmit={this.onFormSubmit} action="#">
          <div className="container">
            <label><b>Email</b></label>
            <input
              type="text"
              placeholder="Email"
              name="uname"
              value={this.state.email}
              onChange={this.onEmailChange}
              required/>
            <label><b>Old Password</b></label>
            <input
              type="password"
              placeholder="Old Password"
              name="psw"
              value={this.state.oldpassword}
              onChange={this.onOldPasswordChange}
              required/>
            <label><b>New Password</b></label>
            <input
              type="password"
              placeholder="New Password"
              name="psw"
              value={this.state.newpassword}
              onChange={this.onNewPasswordChange}
              required/>
            <button type="submit">Change</button>
          </div>
        </form>
      </div>
      if(this.props.userStatus){
        if(this.props.userStatus.changedcredentials && this.state.cleared === false){
          return(
            <div>
              {Content}
              <p>Password Change Successful.</p>
            </div>
          );
        }else{
          if(this.state.cleared === false){
            return(
              <div>
                {Content}
                <p>Unable to change password. Please try again.</p>
              </div>
            );
          }else{
            return(
              <div>
                {Content}
              </div>
            )
          }
        }
      }
      else{
        return(
          <div>
            {Content}
          </div>
        );
      }
  }
}

function mapStateToProps(state){
  return{
    user: state.activeUser,
    userStatus: state.changedUser,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({changeUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Password);
