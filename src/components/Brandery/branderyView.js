import React, {Component} from 'react';
import CompanyBar from './../../containers/Brandery/companyBar.js';
import './style.css';
import './../../index.css';
import {
  Link
} from 'react-router-dom';
import CompanyList from './../../containers/Brandery/companyList.js';

class BranderyView extends Component{
  constructor(props){
    super(props);//gets properties that are from components. passes vars, etc
  }

  render(){

    return(
      <div id="companyapp">
        <div id="header">
          <h1>union</h1>
          <h4 id="logout"><Link to='/'>Log Out</Link></h4>
        </div>
        <CompanyBar />
        <CompanyList />
      </div>
    );
  }
}

export default BranderyView;
