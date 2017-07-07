import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loginUser} from '../../actions/index.js';
import {Redirect} from 'react-router';
import "./login.css";
let CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    let credentials = {"email" : this.state.email , "password" : this.state.password};
    this.props.loginUser(credentials);
  }

  onEmailChange(event){
    this.setState({email: event.target.value});
  }

  onPasswordChange(event){
    this.setState({password: event.target.value});
  }

  render(){
    let Content =
      <div className="login">
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
            <label><b>Password</b></label>
            <input
              type="password"
              placeholder="Password"
              name="psw"
              value={this.state.password}
              onChange={this.onPasswordChange}
              required/>
            <button type="submit">Log In</button>
          </div>
        </form>
      </div>
    if(this.props.user){
      if(this.props.user.usererror){
        return(
          <div>
            <h1 id="title">union</h1>
            <CSSTransitionGroup
               transitionName="example"
               transitionAppear={true}
               transitionAppearTimeout={500}
               transitionEnterTimeout={500}
               transitionLeaveTimeout={300}>
            <p id = "error">Invalid credentials. Please try again.</p>
          </CSSTransitionGroup>
            {Content}
          </div>
        )
      }
      if(this.props.user.loggedinbrand === true){
        return(
          <Redirect to="/brandery"/>
        );
      }
      if(this.props.user.loggedincomp === true){
        return(
          <Redirect to="/company" />
        );
      }
    }else{
      return(
        <div>
          <h1 id="title">union</h1>
          {Content}
        </div>
      );
    }
  }
}

function mapStateToProps(state){
  return{
    user: state.activeUser
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({loginUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
