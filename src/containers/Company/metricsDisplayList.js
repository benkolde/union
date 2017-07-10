import React, {Component} from 'react';
import MetricsDisplayListItem from './../../components/Company/metricsDisplayListItem.js';
import {connect} from 'react-redux';
let CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

//List of the metrics that the user has toggled into view.
class MetricsDisplayList extends Component {
  render(){
    let MetricsDisplayListItems = [];
    for(let i = 0; i < this.props.activeMetrics.length; i++) {
      let availablemetricsitem = this.props.activeMetrics[i];
      let metricData, selectedcompany;
      if(this.props.user.loggedinbrand){
        selectedcompany = this.props.companies[this.props.company];
      }
      else{
        selectedcompany = this.props.companies;
      }
      if(selectedcompany.metrics){
        metricData = [selectedcompany.metrics[availablemetricsitem].data];
      }else{
        metricData = [[]];
      }
      MetricsDisplayListItems.push(
        <MetricsDisplayListItem
          key={availablemetricsitem}
          metricName={availablemetricsitem}
          metricLabel={this.props.availableMetrics[availablemetricsitem].name}
          data={metricData}
        />
      );
    }
    if(MetricsDisplayListItems.length === 0){
      MetricsDisplayListItems =  <p className="inputlistNoData">Select a metric to view logged data.</p>;
    }
    return(
      <ul id="metricsdisplay">
        <CSSTransitionGroup
           id="metricslistspan"
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
    activeMetrics: state.activeMetrics.arr,
    availableMetrics: state.availableMetrics,
    companies: state.companiesdata,
    company: state.activeCompany,
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(MetricsDisplayList);
