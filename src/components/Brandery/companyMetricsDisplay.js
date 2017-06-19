import React, {Component} from 'react';
import MetricsDisplayListItem from "./../Company/metricsDisplayListItem.js";
import {connect} from 'react-redux';

class CompanyMetricsDisplay extends Component {
  render(){
    let CompanyMetricsDisplayItems = [];
    for(let metricsitem in this.props.availableMetrics){
      let availablemetricsitem = this.props.availableMetrics[metricsitem].name;
      let data = [this.props.companies[this.props.company].metrics[metricsitem].data];
      CompanyMetricsDisplayItems.push(<MetricsDisplayListItem key={availablemetricsitem} metricName={availablemetricsitem}  metricLabel={availablemetricsitem + this.props.company.replace(/[^A-Z0-9]+/ig, '')} data={data}/>);
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
}

function mapStateToProps(state){
  return{
    companies: state.companiesdata.companies
  };
}

export default connect(mapStateToProps)(CompanyMetricsDisplay);
