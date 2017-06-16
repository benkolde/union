import React from 'react';
import {
  Link
} from 'react-router-dom';
import CompanyBar from './../../containers/Brandery/companyBar.js';
import CompanyList from './../../containers/Brandery/companyList.js';
import './style.css';
import './../../index.css';

const BranderyView = () => {
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

export default BranderyView;
