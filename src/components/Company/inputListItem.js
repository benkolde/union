import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {submitMetrics, updateMetrics} from '../../actions/index.js';

//Shows input to submit/update data, prompts for confirmation and alerts user of success or failure.
class InputListItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      term: '',
      InputDisplay: "default",
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onInputSubmit = this.onInputSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  onInputSubmit(event){
    event.preventDefault();
    let submittedcompany;
    // make sure you're referencing the correct company data depending on who is logged in.
    if(this.props.user.loggedinbrand){
      submittedcompany = this.props.companies[this.props.company];
    }else{
      submittedcompany = this.props.companies;
    }
    //Computing first and last days of the current week.
    let currentDate = new Date();
    let firstDay = currentDate.getDate() - currentDate.getDay() + 1;
    if(currentDate.getDay() === 0){
      firstDay = currentDate.getDate() - 6;
    }
    let firstDate = new Date(currentDate.setDate(firstDay));
    let lastDate = new Date(currentDate.setDate(firstDate.getDate() + 6));
    firstDate.setHours(0, 0, 0, 0);
    lastDate.setHours(23, 59, 59, 999);
    for(let metric in submittedcompany.metrics){
      if(event.target.id.includes(metric)){
        //find the correct metric and find out when it was last updated.
        let lastUpdated = submittedcompany.metrics[metric].last_updated;
        lastUpdated = new Date(lastUpdated);
        if(lastUpdated >= firstDate && lastUpdated <= lastDate){
          //if it was updated sometime this week, make sure they actually want to change the data.
          this.setState({InputDisplay: "confirm"});
        }else if(lastUpdated < firstDate){
          //if it was updated before this week, we will go ahead and add a new entry for this week.
          this.props.submitMetrics(metric, this.state.term, submittedcompany.id);
          this.setState({InputDisplay: "success"});
          this.setState({term: ''});
        }
      }
    }
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  onCancel(event){
    event.preventDefault();
    this.setState({InputDisplay: "default"});
  }

  onConfirm(event){
    event.preventDefault();
    let submittedcompany;
    if(this.props.user.loggedinbrand){
      submittedcompany = this.props.companies[this.props.company];
    }else{
      submittedcompany = this.props.companies;
    }
    this.props.updateMetrics(this.props.metricName, this.state.term, submittedcompany.id);
    this.setState({term: '', InputDisplay: "success"});
  }

  render(){
    let selectedcompany;
    if(this.props.user.loggedinbrand){
      selectedcompany = this.props.companies[this.props.company];
    }else{
      selectedcompany = this.props.companies;
    }
    //computing first and last days of the week for the display.
    let lastUpdated = new Date(selectedcompany.metrics[this.props.metricName].last_updated);
    let currentDate = new Date();
    let firstDay = currentDate.getDate() - currentDate.getDay() + 1;
    if(currentDate.getDay() === 0){
      firstDay = currentDate.getDate() - 6;
    }
    let firstDate = new Date(currentDate.setDate(firstDay));
    let lastDate = new Date(currentDate.setDate(firstDate.getDate() + 6));
    firstDate.setHours(0, 0, 0, 0);
    lastDate.setHours(23, 59, 59, 999);

    let displaySetting = this.state.InputDisplay;
    let toDisplay;

    switch(displaySetting){
      case "default":
        //displays default input form
        toDisplay =
        <form className="inputform" id={this.props.metricName.replace(/\s+/g, '') + "inputform"} onSubmit={this.onInputSubmit}>
          <input type="number" name="emailinputfield" value={this.state.term} onChange = {this.onInputChange} placeholder= "Total this week"/>
          <input type="submit" name="" value="LOG" />
        </form>
        break;
      case "confirm":
        //prompts user to confirm or cancel their submission. if data already exists for current week.
        toDisplay =
        <div id={this.props.metricName.replace(/\s+/g, '') + "confirmdisplay"} className="confirmdisplay">
          <p>Are you sure you want to update this week's data?</p>
          <div id="responsebuttons">
            <button className="cancel" onClick={this.onCancel}>Cancel</button>
            <button className="confirm" onClick={this.onConfirm}>Confirm</button>
          </div>
        </div>
        break;
      case "success":
        if(this.props.status !== "default"){
          //if there was an error submitting the data, notifies the user and prompts them to try again.
          toDisplay =
          <div id={this.props.metricName.replace(/\s+/g, '') + "confirmdisplay"} className="confirmdisplay">
            <p>Oops, something went wrong. Please try again with a valid number.</p>
            <div id="responsebuttons">
              <button className="return" onClick={this.onCancel}>Go Back</button>
            </div>
          </div>
        }else{
          //lets the user know that their data was updated successfully.
          toDisplay =
          <div id={this.props.metricName.replace(/\s+/g, '') + "confirmdisplay"} className="confirmdisplay">
            <p>Data Updated Successfully!</p>
            <div id="responsebuttons">
              <button className="return" onClick={this.onCancel}>Go Back</button>
            </div>
          </div>
        }
        break;
      default:
        //again if there is no state specified, display default submission form.
        toDisplay =
        <form className="inputform" id={this.props.metricName.replace(/\s+/g, '') + "inputform"} onSubmit={this.onInputSubmit}>
          <input type="number" name="emailinputfield" value={this.state.term} onChange = {this.onInputChange} placeholder= "Total this week"/>
          <input type="submit" name="" value="LOG" />
        </form>
    }

    return(
        <li id={this.props.metricName.replace(/\s+/g, '')+ "input"}>
            <div className="dashboardheader">
              <h4>{this.props.metricName}</h4>
            </div>
            <p>Week of <span className="date">{(firstDate.getMonth()+1) + "/" + firstDate.getDate() + "-" + (lastDate.getMonth() + 1) + "/" + lastDate.getDate()}</span></p>
            <p id="updated">Last Updated: {(lastUpdated.getMonth() + 1) + "/" + (lastUpdated.getDate()) + "/" + (lastUpdated.getFullYear())}</p>
            {toDisplay}
        </li>
    );
  }
}

function mapStateToProps(state){
  return{
    companies: state.companiesdata,
    company: state.activeCompany,
    user: state.activeUser,
    status: state.companyDataStatus,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({submitMetrics, updateMetrics}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InputListItem);
