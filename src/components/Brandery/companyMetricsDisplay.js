import React from 'react';
import MetricsDisplayListItem from "./../Company/metricsDisplayListItem.js";

const CompanyMetricsDisplay = (props) => {
  let DataOrig = {
    "Email Subscribers": [[1, 5, 8, 7, 10, 18, 34, 10, 1, 3, 2]],
    "Sales": [[1, 1000, 2, 4, 7, 9, 100, 9, 10,5894, 594, 4,44,6 ,5,5 , 8, 7, 234,0,3]],
    "Web Traffic": [[1]],
    "New Customers": [[]]
  };
  let CompanyMetricsDisplayItems = [];
  for(let metricsitem in props.availableMetrics){
    let availablemetricsitem = props.availableMetrics[metricsitem].name;
    let emailData = DataOrig[availablemetricsitem];
    CompanyMetricsDisplayItems.push(<MetricsDisplayListItem key={availablemetricsitem} metricName={availablemetricsitem}  metricLabel={availablemetricsitem + props.company} data={emailData}/>);
  }
  return(
    <table className="companymetricsdisplay">
      <tbody>
        <tr>
          <td>
            {CompanyMetricsDisplayItems[0]}
          </td>
          <td>
            {CompanyMetricsDisplayItems[1]}
          </td>
        </tr>
        <tr>
          <td>
            {CompanyMetricsDisplayItems[2]}
          </td>
          <td>
            {CompanyMetricsDisplayItems[3]}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default CompanyMetricsDisplay;
