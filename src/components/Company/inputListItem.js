import React, {Component} from 'react';

class InputListItem extends Component{
  constructor(props){
    super(props);
    this.state = { term: ''};
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  render(){
    return(
        <li id={this.props.metricName.replace(/\s+/g, '')+ "input"}>
            <div className="dashboardheader">
              <h4>{this.props.metricName}</h4>
            </div>
            {/*TODO: change to variable classes*/}
            <p>Week of <span className="date">6/5-6/11</span></p>
            {/*TODO: make this form work.*/}
            <form className="inputform">
              <input type="number" name="emailinputfield" value={this.state.term} onChange = {this.onInputChange} placeholder= "Total this week"/>
              <input type="submit" name="" value="LOG" />
            </form>
        </li>
    );
  }
}

export default InputListItem;
