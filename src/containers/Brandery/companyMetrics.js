import React, {Component} from 'react';
import CompanyMetricsDisplay from './../../components/Brandery/companyMetricsDisplay.js';
import {
  Link
} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectCompany} from '../../actions/index.js';

class CompanyMetrics extends Component{
  constructor(props){
    super(props);
    this.state = {
        "selectedMetrics" : [],
        "isOpen" : true,
    };//allows us to keep track of variables that belong to object that will change frequently.
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
    let company = this.props.company;
    let image = "images/" + company.replace(/[^A-Z0-9]+/ig, '') + ".png";
    return(
      <div className="companyMetrics">
        <div className="companyheader">
          <div className="companyPic"><img src={image} alt=""/></div>
          <h4>{company}</h4>
          <div id="links">
          <Link to={{pathname: "/company", search: company.replace(/[^A-Z0-9]+/ig, '')}}>
            <img className="enter" src="images/Enter 1.svg" alt="" onClick={()=>this.props.selectCompany(company)}/>
          </Link>
          <img className="expand" src={this.expandurl} alt="" onClick={this.handleClick}></img>
          </div>
        </div>
        <div className="content" style={this.style}>
          <CompanyMetricsDisplay availableMetrics={this.props.availableMetrics} company = {company}/>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state){
  return{
    companies: state.companiesdata.companies,
    availableMetrics: state.availableMetrics
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectCompany : selectCompany}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyMetrics);
