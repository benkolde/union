import React , {Component} from 'react';
import CompanyMetrics from './companyMetrics.js';
import {connect} from 'react-redux';

class CompanyList extends Component{
  render() {
    let CompanyListItems= [];
    for(let company in this.props.companies){
      CompanyListItems.push(
        <CompanyMetrics key={this.props.companies[company].name} company={company}/>
      );
    }
    return (<div>{CompanyListItems}</div>);
  }
}

function mapStateToProps(state){
  return{
    companies: state.companiesdata
  };
}

export default connect(mapStateToProps)(CompanyList);
