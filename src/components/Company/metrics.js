import React from 'react';
import MetricsItem from './metricsItem.js';


const MetricsTable = (props) => {
  const metricsTableItems = [];
  for(let availablemetricsitem in props.availableMetrics){
    metricsTableItems.push(<MetricsItem key={availablemetricsitem} metricName={props.availableMetrics[availablemetricsitem].name} url={props.availableMetrics[availablemetricsitem].image} onMetricClick={props.onMetricSelect}/>);
  }
  return(
    <div id="metrics">
      <div className="dashboardheader">
        <h4>Your Metrics</h4>
      </div>
      <p>Please select the metrics that your team would like to track each week.</p>
      <table id="metricstable">
        <tbody>
          <tr>
            {metricsTableItems[0]}
            {metricsTableItems[1]}
          </tr>
          <tr>
            {metricsTableItems[2]}
            {metricsTableItems[3]}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MetricsTable;
