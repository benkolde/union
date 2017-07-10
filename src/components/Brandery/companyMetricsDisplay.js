import React, {Component} from 'react';
import MetricsDisplayListItem from "./../Company/metricsDisplayListItem.js";
import {connect} from 'react-redux';

/*TODO: eventually this should be specific to each company, at least the metrics
that they're tracking should be. Should only show the metrics that are actually
being tracked by each company, not every metric available.*/

/*The actual metrics display section that is toggled in and out of view.
  Excludes header from companyMetrics
*/
class CompanyMetricsDisplay extends Component {
  render(){
    let CompanyMetricsDisplayItems = [];
    for(let metricsItem in this.props.availableMetrics){
      let metricsItemName = this.props.availableMetrics[metricsItem].name;
      let data;
      if(this.props.companies[this.props.company].metrics){
        data = [this.props.companies[this.props.company].metrics[metricsItem].data];
      }else{
        data = [[]];
      }
      CompanyMetricsDisplayItems.push(
        <MetricsDisplayListItem
          key={metricsItemName}
          metricName={(metricsItemName + this.props.company).replace(/[^A-Z0-9]+/ig, '')}
          metricLabel={this.props.availableMetrics[metricsItem].name}
          data={data}
        />
      );
    }
    return(
      <div className="table companymetricsdisplay">
        <div className="tbody">
          <div className="tr">
            <div className="td">
              {CompanyMetricsDisplayItems[0]}
            </div>
            <div className="td">
              {CompanyMetricsDisplayItems[1]}
            </div>
          </div>
          <div className="tr">
            <div className="td">
              {CompanyMetricsDisplayItems[2]}
            </div>
            <div className="td">
              {CompanyMetricsDisplayItems[3]}
            </div>
          </div>
          <div className="tr">
            <div className="td">
              {CompanyMetricsDisplayItems[4]}
            </div>
            <div className="td">
              {CompanyMetricsDisplayItems[5]}
            </div>
          </div>
          <div className="tr">
            <div className="td">
              {CompanyMetricsDisplayItems[6]}
            </div>
            <div className="td">
              {CompanyMetricsDisplayItems[7]}
            </div>
          </div>
          <div className="tr">
            <div className="td">
              {CompanyMetricsDisplayItems[8]}
            </div>
            <div className="td">
              {CompanyMetricsDisplayItems[9]}
            </div>
          </div>
          <div className="tr">
            <div className="td">
              {CompanyMetricsDisplayItems[10]}
            </div>
            <div className="td">
              {CompanyMetricsDisplayItems[11]}
            </div>
          </div>
          <div className="tr">
            <div className="td">
              {CompanyMetricsDisplayItems[12]}
            </div>
            <div className="td">
              {CompanyMetricsDisplayItems[13]}
            </div>
          </div>
          <div className="tr">
            <div className="td">
              {CompanyMetricsDisplayItems[14]}
            </div>
            <div className="td">
              {CompanyMetricsDisplayItems[15]}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    companies: state.companiesdata
  };
}

export default connect(mapStateToProps)(CompanyMetricsDisplay);
