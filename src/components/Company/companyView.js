import React, {Component} from 'react';
import Profile from './../../containers/Company/profile.js';
import Metrics from './../../containers/Company/metrics.js';
import InputList from './inputList.js';
import MetricsDisplayList from './metricsDisplayList.js';
import './../Brandery/style.css';
import './../../index.css';
import {
  Link
} from 'react-router-dom';


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
        <div id="header">
          <h1>union</h1>
          <h4 id="logout"><Link to='/'>Log Out</Link></h4>
        </div>
        <Profile />
        <div id="dashboard">
          <Metrics onMetricSelect={(selectedMetric) => this.selectMetric(selectedMetric)}/>
          <InputList availableMetrics={this.state.selectedMetrics}/>
          <MetricsDisplayList availableMetrics={this.state.selectedMetrics} />
        </div>
      </div>
    );
  }
}

export default CompanyView;
