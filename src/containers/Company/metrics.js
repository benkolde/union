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
          metricLabel={this.props.availableMetrics[availablemetricsitem].name}
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
        <div id="metricstablediv">
        <div id="metricstable" className="table">
          <div className="tbody">
            <div className = "tr">
              {metricsTableItems[0]}
              {metricsTableItems[1]}
            </div>
            <div className = "tr">
              {metricsTableItems[2]}
              {metricsTableItems[3]}
            </div>
            <div className = "tr">
              {metricsTableItems[4]}
              {metricsTableItems[5]}
            </div>
            <div className = "tr">
              {metricsTableItems[6]}
              {metricsTableItems[7]}
            </div>
            <div className = "tr">
              {metricsTableItems[8]}
              {metricsTableItems[9]}
            </div>
            <div className = "tr">
              {metricsTableItems[10]}
              {metricsTableItems[11]}
            </div>
            <div className = "tr">
              {metricsTableItems[12]}
              {metricsTableItems[13]}
            </div>
            <div className = "tr">
              {metricsTableItems[14]}
              {metricsTableItems[15]}
            </div>
          </div>
        </div>
      </div>
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
