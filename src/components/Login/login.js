import React, {Component} from 'react';
import "./login.css";
import {
  Link
} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loginUser} from '../../actions/index.js';
import {Redirect} from 'react-router';

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
    console.log(this.props.user);
    if(this.props.user){
      if(this.props.user.staff === true){
        return(
          <Redirect to="/brandery"/>
        );
      }else if(this.props.user.staff === false){
        return(
          <Redirect to="/company" />
        );
      }
    }else{
      return(
        <div id="login">
          <h1 id="title">union</h1>
          <form onSubmit={this.onFormSubmit} action="#">
            <div className="container">
              <label><b>Email</b></label>
              <input
                type="text"
                placeholder="Name"
                name="uname"
                value={this.state.email}
                onChange={this.onEmailChange}
                required/>
              <label><b>Password</b></label>
              <input
                type="password"
                placeholder="Email"
                name="psw"
                value={this.state.password}
                onChange={this.onPasswordChange}
                required/>
              <button type="submit">Log In</button>
            </div>
          </form>
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
