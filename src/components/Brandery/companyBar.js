import React from 'react';
import CompanyImage from './companyImage.js';

const CompanyBar = (props) => {
  let CompanyBarItems = [];
  for(let company in props.companies){
    CompanyBarItems.push(<CompanyImage key={props.companies[company].name} url={props.companies[company].image}/>);
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

export default CompanyBar;
