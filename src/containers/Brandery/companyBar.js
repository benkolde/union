import React, {Component} from 'react';
import CompanyImage from './../../components/Brandery/companyImage.js';
import {connect} from 'react-redux';

class CompanyBar extends Component{
  render(){
    let CompanyBarItems = [];
    for(let company in this.props.companies){
      CompanyBarItems.push(
        <CompanyImage key={this.props.companies[company].name} url={this.props.companies[company].image}/>
      );
    }
    return(
        <div id="companiesbar">
          <h4>Companies</h4>
          <ul>
            {CompanyBarItems}
          </ul>
        </div>
      );
  }
}

function mapStateToProps(state){
  return{
    companies: state.companiesdata
  };
}

export default connect(mapStateToProps)(CompanyBar);
