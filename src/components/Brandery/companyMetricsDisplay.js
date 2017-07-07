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
          <tr>
            <td>
              {CompanyMetricsDisplayItems[4]}
            </td>
            <td>
              {CompanyMetricsDisplayItems[5]}
            </td>
          </tr>
          <tr>
            <td>
              {CompanyMetricsDisplayItems[6]}
            </td>
            <td>
              {CompanyMetricsDisplayItems[7]}
            </td>
          </tr>
          <tr>
            <td>
              {CompanyMetricsDisplayItems[8]}
            </td>
            <td>
              {CompanyMetricsDisplayItems[9]}
            </td>
          </tr>
          <tr>
            <td>
              {CompanyMetricsDisplayItems[10]}
            </td>
            <td>
              {CompanyMetricsDisplayItems[11]}
            </td>
          </tr>
          <tr>
            <td>
              {CompanyMetricsDisplayItems[12]}
            </td>
            <td>
              {CompanyMetricsDisplayItems[13]}
            </td>
          </tr>
          <tr>
            <td>
              {CompanyMetricsDisplayItems[14]}
            </td>
            <td>
              {CompanyMetricsDisplayItems[15]}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state){
  return{
    companies: state.companiesdata
  };
}

export default connect(mapStateToProps)(CompanyMetricsDisplay);
