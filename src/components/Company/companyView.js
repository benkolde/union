import React, {Component} from 'react';
import Header from './../../containers/Brandery/header.js';
import Profile from './../../containers/Company/profile.js';
import Metrics from './../../containers/Company/metrics.js';
import InputList from './inputList.js';
import MetricsDisplayList from './../../containers/Company/metricsDisplayList.js';
import './../Brandery/style.css';
import './../../index.css';

class CompanyView extends Component{
  constructor(props){
    super(props);//gets properties that are from components. passes vars, etc

    this.state = {
        "selectedMetrics" : [],
    };//allows us to keep track of variables that belong to object that will change frequently.
  }

  selectMetric(metric){
    if(this.state.selectedMetrics.indexOf(metric) === -1){
      this.setState({[metric] : true});
      this.state.selectedMetrics.push(metric);
      document.getElementById(metric.replace(/\s+/g, '') + "Cell").style.background = "rgba(255, 98, 98, 1.0)";
    }else{
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
