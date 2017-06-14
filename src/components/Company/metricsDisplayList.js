import React from 'react';
import MetricsDisplayListItem from './metricsDisplayListItem.js';
let CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');



const MetricsDisplayList = (props) => {
  let DataOrig = {
    "Email Subscribers": [[1, 5, 8, 7, 10, 18, 34, 10, 1, 3, 2]],
    "Sales": [[1, 1000, 2, 4, 7, 9, 100, 9, 10,5894, 594, 4,44,6 ,5,5 , 8, 7, 234,0,3]],
    "Web Traffic": [[1]],
    "New Customers": [[]]
  };
  let MetricsDisplayListItems = props.availableMetrics.map((availablemetricsitem) => {
    let emailData = DataOrig[availablemetricsitem];
    return(
      <MetricsDisplayListItem key={availablemetricsitem} metricName={availablemetricsitem} metricLabel={availablemetricsitem} data={emailData}/>
    );
  });
  if(MetricsDisplayListItems.length === 0){
    MetricsDisplayListItems =  <p className="inputlistNoData">Select a metric to view logged data.</p>;
  }
  return(
    <ul id="metricsdisplay">
      <CSSTransitionGroup
         transitionName="example"
         transitionEnterTimeout={500}
         transitionLeaveTimeout={300}>
      {MetricsDisplayListItems}
    </CSSTransitionGroup>
    </ul>
  );
}

export default MetricsDisplayList;
