import React, {Component} from 'react';
import CompanyImage from './../../components/Brandery/companyImage.js';
import {connect} from 'react-redux';

class CompanyBar extends Component{
  render(){
    let CompanyBarItems = [];
    for(let company in this.props.companies){
      let currentcompany = this.props.companies[company];
      CompanyBarItems.push(
        <CompanyImage key={currentcompany.name} url={currentcompany.image} name={currentcompany.name}/>
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
