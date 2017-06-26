import React from 'react';
import Header from './../../containers/Brandery/header.js'
import CompanyBar from './../../containers/Brandery/companyBar.js';
import CompanyList from './../../containers/Brandery/companyList.js';
import './style.css';
import './../../index.css';

const BranderyView = () =>{
  return(
    <div id="companyapp">
      <Header />
      <CompanyBar />
      <CompanyList />
    </div>
  );
}

export default BranderyView;
