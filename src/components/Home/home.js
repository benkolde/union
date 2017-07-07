import React, {Component} from 'react';
import Login from '../../containers/Login/login.js';
import Password from '../../containers/Login/password.js';


class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      view: "login",
    }
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onCancelPassword = this.onCancelPassword.bind(this);
  }

  onChangePassword(event){
    event.preventDefault();
    this.setState({view: "change"});
  }

  onCancelPassword(event){
    event.preventDefault();
    this.setState({view: "login"});
  }

  render(){
    if(this.state.view ==="login"){
      return(
        <div id="login">
          <h1 id="title">union</h1>
            <Login />
            <p id="change" onClick={this.onChangePassword}>Change password</p>
        </div>
      );
    }else{
      return(
        <div id="login">
          <h1 id="title">union</h1>
          <Password />
            <p id="change" onClick={this.onCancelPassword}>Cancel</p>
        </div>
      );
    }
  }
}

export default Home;
