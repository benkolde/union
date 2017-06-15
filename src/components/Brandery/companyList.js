import React from 'react';
import CompanyMetrics from './companyMetrics.js';

const CompanyList = (props) => {
  let CompanyListItems= [];
  for(let company in props.currentcompanies){
    CompanyListItems.push(
      <CompanyMetrics
        key={company}
        companyimage={props.currentcompanies[company].image}
        companyname={props.currentcompanies[company].name}
        company={company}
      />
    );
  }

  return (<div>{CompanyListItems}</div>);
}

export default CompanyList;
