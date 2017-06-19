import React, {Component} from 'react';
import MetricsDisplayListItem from './metricsDisplayListItem.js';
import {connect} from 'react-redux';
let CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');



class MetricsDisplayList extends Component {
  render(){
    let MetricsDisplayListItems = [];
    console.log(this.props.availableMetrics);
    for(let i = 0; i < this.props.availableMetrics.length; i++) {
      let availablemetricsitem = this.props.availableMetrics[i];
      let emailData = [this.props.companies[this.props.company].metrics[availablemetricsitem].data];
      MetricsDisplayListItems.push(
        <MetricsDisplayListItem
          key={availablemetricsitem}
          metricName={availablemetricsitem}
          metricLabel={availablemetricsitem}
          data={emailData}
        />
      );
    }
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
}

function mapStateToProps(state){
  return{
    availableMetrics: state.activeMetrics.arr,
    companies: state.companiesdata.companies,
  };
}

export default connect(mapStateToProps)(MetricsDisplayList);
