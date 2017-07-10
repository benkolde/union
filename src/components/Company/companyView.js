import React, {Component} from 'react';
import Header from './../../containers/Brandery/header.js';
import Profile from './../../containers/Company/profile.js';
import Metrics from './../../containers/Company/metrics.js';
import InputList from './inputList.js';
import Password from './../../containers/Login/password.js';
import MetricsDisplayList from './../../containers/Company/metricsDisplayList.js';
import './../Brandery/style.css';
import './../../index.css';
let CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

/* Shows table of available metrics, inputs to update metrics, and
   a display summarizing metrics changes, totals, and a graph.
   This is a view for one specific company.
*/
class CompanyView extends Component{
  constructor(props){
    super(props);
    this.state = {
        "selectedMetrics" : [], //Which metrics from the table are toggled on
        "password": false
    };
    this.selectMetric = this.selectMetric.bind(this);
    this.changePassword = this.changePassword.bind(this);
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

  changePassword(event){
    this.setState({"password": !this.state.password});
  }

  render(){
    if(this.state.password){
      return(
        <div id="companyview">
          <Header />
          <Profile onChangePassword = {() => this.changePassword()}/>
            <div id="password">
              <CSSTransitionGroup
                 transitionName="password"
                 transitionAppear={true}
                 transitionAppearTimeout={500}
                 transitionEnterTimeout={500}
                 transitionLeaveTimeout={500}>
                 <Password onChangePassword= {() => this.changePassword()}/>
              </CSSTransitionGroup>
            </div>
          <div id="dashboard">
            <Metrics onMetricSelect={(selectedMetric) => this.selectMetric(selectedMetric)}/>
            <InputList availableMetrics={this.state.selectedMetrics}/>
            <MetricsDisplayList/>
          </div>
        </div>
      );
    }else{
      return(
        <div id="companyview">
          <Header />
          <Profile onChangePassword = {() => this.changePassword()}/>
          <div id="dashboard">
            <Metrics onMetricSelect={(selectedMetric) => this.selectMetric(selectedMetric)}/>
            <div id="dashboardlists">
            <InputList availableMetrics={this.state.selectedMetrics}/>
            <MetricsDisplayList/>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CompanyView;
