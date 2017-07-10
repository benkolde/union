import React , {Component} from 'react';
import CompanyMetrics from './companyMetrics.js';
import {connect} from 'react-redux';

// An admin's view of each of the companies and their respective metrics.
class CompanyList extends Component{
  render() {
    let CompanyListItems= [];
    for(let company in this.props.companies){
      CompanyListItems.push(
        <CompanyMetrics key={company} company={company}/>
      );
    }
    return (<div id="companylist">{CompanyListItems}</div>);
  }
}

function mapStateToProps(state){
  return{
    companies: state.companiesdata,
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(CompanyList);
