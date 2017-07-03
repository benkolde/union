import React, {Component} from 'react';
import CompanyMetricsDisplay from './../../components/Brandery/companyMetricsDisplay.js';
import {
  Link
} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectCompany} from '../../actions/index.js';

// An individual metric section for a company. shows each metric, graph, etc.
class CompanyMetrics extends Component{
  constructor(props){
    super(props);
    this.state = {
        isOpen : true,
        expandurl: "images/Close.svg"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //Purpose of function is to toggle company metrics views on and off to simplify UI.
    if(this.state.isOpen){
      this.setState({expandurl: "images/Expand.svg"});
    }else{
      this.setState({expandurl: "images/Close.svg"});
    }
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render(){
    let company = this.props.company;
    let compId = company.replace(/[^A-Z0-9]+/ig, '');
    let image = "images/" + compId + ".png";
    image = image.toLowerCase();
    let metricsHeader =
      <div className="companyheader" id={compId}>
        <div className="companyPic"><img src={image} alt=""/></div>
        <h4>{company}</h4>
        <div id="links">
        <Link to={{pathname: "/company"}}>
          <img className="enter" src="images/Enter 1.svg" alt="" onClick={()=>this.props.selectCompany(company)}/>
        </Link>
        <img className="expand" src={this.state.expandurl} alt="" onClick={this.handleClick}></img>
        </div>
      </div>
    if(this.state.isOpen){
      return(
        <div className="companyMetrics">
          {metricsHeader}
          <div className="content">
            <CompanyMetricsDisplay availableMetrics={this.props.availableMetrics} company = {company}/>
          </div>
        </div>
      );
    }else{
      return(
        <div className="companyMetrics">
          {metricsHeader}
        </div>
      );
    }
  }
}


function mapStateToProps(state){
  return{
    availableMetrics: state.availableMetrics
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectCompany : selectCompany}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyMetrics);
