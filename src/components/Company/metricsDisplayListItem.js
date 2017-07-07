import React, {Component} from 'react';
import MetricsGraph from './metricsGraph.js';

//TODO: change to make the decimals round to a certain place but make the ints stay ints.

//shows weekly totals and change, total data, and a graph of metrics data.
class MetricsDisplayListItem extends Component{
  componentDidMount(){
    //data is a 2D array.
    let data = this.props.data;
    let datachange = data[0][data[0].length - 1] - data[0][data[0].length - 2];
    //set the weekly change indicator's color according to the difference b/w data points
    if(datachange < 0){
      document.getElementById(this.props.metricName.replace(/\s+/g, '') + "display").getElementsByClassName("displaycontentchange")[0].style.color = "#FF6262";
    }else if(datachange === 0){
      document.getElementById(this.props.metricName.replace(/\s+/g, '') + "display").getElementsByClassName("displaycontentchange")[0].style.color = "#FFFFFF";
    }
  }

  componentDidUpdate(){
    let data = this.props.data;
    let datachange = data[0][data[0].length - 1] - data[0][data[0].length - 2];
    //update the weekly change indicator's color if the metrics are updated.
    if(datachange < 0){
      document.getElementById(this.props.metricName.replace(/\s+/g, '') + "display").getElementsByClassName("displaycontentchange")[0].style.color = "#FF6262";
    }else if(datachange > 0){
      document.getElementById(this.props.metricName.replace(/\s+/g, '') + "display").getElementsByClassName("displaycontentchange")[0].style.color = "#62FFB7";
    }else if(datachange === 0){
      document.getElementById(this.props.metricName.replace(/\s+/g, '') + "display").getElementsByClassName("displaycontentchange")[0].style.color = "#FFFFFF";
    }
  }

  render(){
    let data = this.props.data;
    let datachange, totaldata, source, DisplayContent;
    if(data[0].length > 1){
      /* there are at least two data points, which means we can compute change
         and will display a graph of the data.
      */
      datachange = data[0][data[0].length - 1] - data[0][data[0].length - 2];
      // function to compute the total of an array.
      function getSum(total, num) {
        return total + num;
      }
      totaldata = data[0].reduce(getSum);
      source = "images/Asset 2.svg";
      if(datachange < 0){
        source = "images/Asset 3.svg";
        datachange = Math.abs(datachange);
      }else if(datachange ===0){
        source = "";
        datachange = "--";
      }
      DisplayContent =
        <div className="displaycontent">
          <div className="weekly">
            <p className="displaycontentheader">This Week</p>
            <p className="displaycontentnumber">{data[0][data[0].length - 1]}</p>
            <p className="displaycontentchange"><img src={source} alt="" />{datachange}</p>
            <p className="displaycontentchangelabel">Since last week</p>
          </div>
          <div className="total">
            <p className="displaycontentheader">Total</p>
            <p className="displaycontentnumber">{totaldata}</p>
          </div>
          <MetricsGraph metricLabel={this.props.metricName} data={this.props.data}/>
        </div>
    }else if(data[0].length === 1){
      //We only have one data point. We won't compute change or display the graph.
      totaldata = data[0][0];
      source = "";
      DisplayContent =
        <div className="displaycontent">
          <div className="weekly">
            <p className="displaycontentheader">This Week</p>
            <p className="displaycontentnumber">{data[0][0]}</p>
            <p className="displaycontentchange" style={{color: "#FFFFFF"}}>--</p>
            <p className="displaycontentchangelabel">Since last week</p>
          </div>
          <div className="total">
            <p className="displaycontentheader">Total</p>
            <p className="displaycontentnumber">{totaldata}</p>
          </div>
        </div>
    }
    else{
      //we have no data to display.
      DisplayContent =
      <div className="displaycontent">
        <div className="weekly">
          <p className="displaycontentheader">This Week</p>
          <p className="displaycontentnumber">--</p>
          <p className="displaycontentchange" style={{color: "#FFFFFF"}}>--</p>
          <p className="displaycontentchangelabel">Since last week</p>
        </div>
        <div className="total">
          <p className="displaycontentheader">Total</p>
          <p className="displaycontentnumber">--</p>
        </div>
      </div>
    }
    return(
      <li id={this.props.metricName.replace(/\s+/g, '') + "display"}>
        <div className="dashboardheader">
          <h4>{this.props.metricLabel}</h4>
        </div>
        {DisplayContent}
      </li>
    );
  }
}

export default MetricsDisplayListItem;
