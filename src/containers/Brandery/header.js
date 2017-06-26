import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
import {logoutUser} from '../../actions/index.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Header extends Component{
  constructor(props){
    super(props);
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  onLogoutClick(){
    this.props.logoutUser();
  }

  render(){
    return(
      <div id="header">
        <h1>union</h1>
        <h4 id="logout" onClick={this.onLogoutClick}><Link to='/'>Log Out</Link></h4>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({logoutUser}, dispatch);
}

export default connect(null, mapDispatchToProps)(Header);
