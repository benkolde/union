import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {submitMetrics, updateMetrics} from '../../actions/index.js';


class InputListItem extends Component{
  constructor(props){
    super(props);
    //TODO: change to make term for each metric.
    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onInputSubmit = this.onInputSubmit.bind(this);
  }

  onInputSubmit(event){
    event.preventDefault();
    let submittedcompany;
    if(this.props.user.loggedinbrand){
      submittedcompany = this.props.companies[this.props.company];
    }else{
      submittedcompany = this.props.companies;
    }

    let currentDate = new Date();
    let firstDay = currentDate.getDate() - currentDate.getDay() + 1;
    if(currentDate.getDay() === 0){
      firstDay = currentDate.getDate() - 6;
    }
    let firstDate = new Date(currentDate.setDate(firstDay));
    let lastDate = new Date(currentDate.setDate(firstDay + 6));
    firstDate.setHours(0, 0, 0, 0);
    lastDate.setHours(23, 59, 59, 999);

    for(let metric in submittedcompany.metrics){
      if(event.target.id.includes(metric)){
        let lastUpdated = submittedcompany.metrics[metric].last_updated;
        lastUpdated = new Date(lastUpdated);
        if(lastUpdated >= firstDate && lastUpdated <= lastDate){
          this.props.updateMetrics(metric, this.state.term, submittedcompany.id);
          this.setState({term: ''});
        }else if(lastUpdated < firstDate){
          this.props.submitMetrics(metric, this.state.term, submittedcompany.id);
          this.setState({term: ''});
        }


        //this.props.submitData(metric, event.target.)
      }
    }
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  render(){
    let selectedcompany;
    if(this.props.user.loggedinbrand){
      selectedcompany = this.props.companies[this.props.company];
    }else{
      selectedcompany = this.props.companies;
    }
    let lastUpdated = new Date(selectedcompany.metrics[this.props.metricName].last_updated);
    let currentDate = new Date();
    let firstDay = currentDate.getDate() - currentDate.getDay() + 1;
    if(currentDate.getDay() === 0){
      firstDay = currentDate.getDate() - 6;
    }
    let firstDate = new Date(currentDate.setDate(firstDay));
    let lastDate = new Date(currentDate.setDate(firstDay + 6));
    firstDate.setHours(0, 0, 0, 0);
    lastDate.setHours(23, 59, 59, 999);
    return(
        <li id={this.props.metricName.replace(/\s+/g, '')+ "input"}>
            <div className="dashboardheader">
              <h4>{this.props.metricName}</h4>
            </div>
            <p>Week of <span className="date">{(firstDate.getMonth()+1) + "/" + firstDate.getDate() + "-" + (lastDate.getMonth() + 1) + "/" + lastDate.getDate()}</span></p>
            <p id="updated">Last Updated: {(lastUpdated.getMonth() + 1) + "/" + (lastUpdated.getDate()) + "/" + (lastUpdated.getFullYear())}</p>
            {/*TODO: make this form work.*/}
            <form className="inputform" id={this.props.metricName.replace(/\s+/g, '') + "inputform"} onSubmit={this.onInputSubmit}>
              <input type="number" name="emailinputfield" value={this.state.term} onChange = {this.onInputChange} placeholder= "Total this week"/>
              <input type="submit" name="" value="LOG" />
            </form>
        </li>
    );
  }
}

function mapStateToProps(state){
  return{
    companies: state.companiesdata,
    company: state.activeCompany,
    user: state.activeUser
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({submitMetrics, updateMetrics}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InputListItem);
