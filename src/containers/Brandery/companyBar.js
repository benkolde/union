import React, {Component} from 'react';
import CompanyImage from './../../components/Brandery/companyImage.js';
import {connect} from 'react-redux';

class CompanyBar extends Component{
  render(){
    let CompanyBarItems = [];
    for(let company in this.props.companies){
      let image = "images/" + company.replace(/[^A-Z0-9]+/ig, '') + ".png";
      image = image.toLowerCase();
      CompanyBarItems.push(
        <CompanyImage key={company} url={image} name={company}/>
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
