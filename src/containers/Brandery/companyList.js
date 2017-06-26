import React , {Component} from 'react';
import CompanyMetrics from './companyMetrics.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchCompanies} from '../../actions/index.js';

class CompanyList extends Component{
  render() {
    let CompanyListItems= [];
    for(let company in this.props.companies){
      CompanyListItems.push(
        <CompanyMetrics key={company} company={company}/>
      );
    }
    return (<div>{CompanyListItems}</div>);
  }
}

function mapStateToProps(state){
  return{
    companies: state.companiesdata,
    user: state.activeUser
  };
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchCompanies}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);
