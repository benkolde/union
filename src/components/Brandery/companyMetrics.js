import React, {Component} from 'react';
import CompanyMetricsDisplay from './companyMetricsDisplay.js';
import {
  Link
} from 'react-router-dom';

class CompanyMetrics extends Component{
  constructor(props){
    super(props);//gets properties that are from components. passes vars, etc

    this.state = {
        "selectedMetrics" : [],
        "isOpen" : true,
    };//allows us to keep track of variables that belong to object that will change frequently.

    this.availableMetrics = ["Email Subscribers", "Sales", "Web Traffic", "New Customers"];
    this.style = {display: "block"};
    this.expandurl = "images/Close.svg";
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if(this.state.isOpen){
      this.style.display= "none";
      this.expandurl = "images/Expand.svg";
    }else{
      this.style.display= "block";
      this.expandurl = "images/Close.svg";
    }
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render(){
    let companyname = this.props.company;
    return(
      <div className="companyMetrics">
        <div className="companyheader">
          <div className="companyPic"><img src={this.props.companyimage} alt=""/></div>
          <h4>{this.props.companyname}</h4>
          <div id="links">
          <Link to={{pathname: "/company", search: companyname}}><img className="enter" src="images/Enter 1.svg" alt=""></img></Link>
          <img className="expand" src={this.expandurl} alt="" onClick={this.handleClick}></img>
          </div>
        </div>
        <div className="content" style={this.style}>
          <CompanyMetricsDisplay availableMetrics={this.availableMetrics} company = {this.props.company}/>
        </div>
      </div>
    );
  }
}

export default CompanyMetrics;
