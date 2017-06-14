import React, {Component} from 'react';
import "./login.css";
import {
  Link
} from 'react-router-dom';

class Login extends Component{
  render(){
    return(
      <div id="login">
        <h1 id="title">union</h1>
        <form action="#">
          <div className="container">
            <label><b>Name</b></label>
            <input type="text" placeholder="Name" name="uname" required />

            <label><b>Email</b></label>
            <input type="password" placeholder="Email" name="psw" required />
            <Link to="/brandery"><button type="submit">Log In</button></Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
