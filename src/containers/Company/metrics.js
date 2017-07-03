import React, {Component} from 'react';
import MetricsTableItem from './metricsItem.js';
import {connect} from 'react-redux';

/*TODO: eventually this table should be customized with the user's metrics that
  they would like to track. should iterate through metrics array and create the
  table dynamically.
*/

//The table with available metrics that user can toggle on and off.
class MetricsTable extends Component{
  render(){
    const metricsTableItems = [];
    for(let availablemetricsitem in this.props.availableMetrics){
      metricsTableItems.push(
        <MetricsTableItem
          key={availablemetricsitem}
          metricName={availablemetricsitem}
          url={this.props.availableMetrics[availablemetricsitem].image}
          onMetricClick={this.props.onMetricSelect}
        />
      );
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
}

function mapStateToProps(state){
  return{
    availableMetrics: state.availableMetrics
  };
}

export default connect(mapStateToProps)(MetricsTable);
