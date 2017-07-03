import React, {Component} from 'react';
import Header from './../../containers/Brandery/header.js';
import Profile from './../../containers/Company/profile.js';
import Metrics from './../../containers/Company/metrics.js';
import InputList from './inputList.js';
import MetricsDisplayList from './../../containers/Company/metricsDisplayList.js';
import './../Brandery/style.css';
import './../../index.css';

/* Shows table of available metrics, inputs to update metrics, and
   a display summarizing metrics changes, totals, and a graph.
   This is a view for one specific company.
*/
class CompanyView extends Component{
  constructor(props){
    super(props);
    this.state = {
        "selectedMetrics" : [], //Which metrics from the table are toggled on
    };
    this.selectMetric.bind(this);
  }

  selectMetric(metric){
    if(this.state.selectedMetrics.indexOf(metric) === -1){
      //if the metric isn't toggled on, add to end of list.
      this.setState({[metric] : true});
      this.state.selectedMetrics.push(metric);
      document.getElementById(metric.replace(/\s+/g, '') + "Cell").style.background = "rgba(255, 98, 98, 1.0)";
    }else{
      //remove metric from the list
      this.setState({[metric] : false});
      let metricIndex = this.state.selectedMetrics.indexOf(metric);
      if(metricIndex > -1){
        this.state.selectedMetrics.splice(metricIndex, 1);
      }
      document.getElementById(metric.replace(/\s+/g, '') + "Cell").style.background = null;
    }
  }

  render(){
    return(
      <div id="companyview">
        <Header />
        <Profile />
        <div id="dashboard">
          <Metrics onMetricSelect={(selectedMetric) => this.selectMetric(selectedMetric)}/>
          <InputList availableMetrics={this.state.selectedMetrics}/>
          <MetricsDisplayList/>
        </div>
      </div>
    );
  }
}

export default CompanyView;
