import React, {Component} from 'react';
import CompanyBar from './companyBar.js';
import CompanyMetrics from './companyMetrics.js';
import './style.css';
import './../../index.css';
import {
  Link
} from 'react-router-dom';

class BranderyView extends Component{
  constructor(props){
    super(props);//gets properties that are from components. passes vars, etc
    this.currentcompanies = {
      Gainful : {
        name : "Gainful",
        image : "images/gainful.png"
      },
      Consultmates : {
        name : "Consultmates",
        image : "images/consultmates.png"
      },
      SoapySoapCo : {
        name : "Soapy Soap Co.",
        image : "images/soapysoap.png"
      },
      TameTheBeast : {
        name : "Tame The Beast",
        image : "images/tamethebeast.png"
      },
      JumperThreads : {
        name : "Jumper Threads",
        image : "images/jumperthreads.png"
      },
      Obe : {
        name : "Obe Pet Products",
        image : "images/obe.png"
      },
      RetargetLinks : {
        name : "Retarget Links",
        image : "images/retarget.png"
      }
    }
  }

  render(){
    console.log();
    let CompanyList= [];
    for(let company in this.currentcompanies){
      CompanyList.push(<CompanyMetrics key={company} companyimage={this.currentcompanies[company].image} companyname={this.currentcompanies[company].name} company={company}/>);
    }

    return(
      <div id="companyapp">
        <div id="header">
          <h1>union</h1>
          <h4 id="logout"><Link to='/'>Log Out</Link></h4>
        </div>
        <CompanyBar companies={this.currentcompanies}/>
        {CompanyList}
      </div>
    );
  }
}

export default BranderyView;
