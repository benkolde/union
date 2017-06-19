import React, {Component} from 'react';
import MetricsGraph from './metricsGraph.js';

class MetricsDisplayListItem extends Component{
  componentDidMount(){
    let data = this.props.data;
    let datachange = data[0][data[0].length - 1] - data[0][data[0].length - 2];
    if(datachange < 0){
      document.getElementById(this.props.metricLabel.replace(/\s+/g, '') + "display").getElementsByClassName("displaycontentchange")[0].style.color = "#FF6262";
    }else if(datachange === 0){
      document.getElementById(this.props.metricLabel.replace(/\s+/g, '') + "display").getElementsByClassName("displaycontentchange")[0].style.color = "#FFFFFF";
    }
  }

  render(){
    let data = this.props.data;
    let datachange, totaldata, source, DisplayContent;
    if(data[0].length > 1){
      datachange = data[0][data[0].length - 1] - data[0][data[0].length - 2];
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
          <MetricsGraph metricLabel={this.props.metricLabel} data={this.props.data}/>
        </div>
    }else if(data[0].length === 1){
      totaldata = data[0];
      source = "";
      DisplayContent =
        <div className="displaycontent">
          <div className="weekly">
            <p className="displaycontentheader">This Week</p>
            <p className="displaycontentnumber">{data[0][data[0].length - 1]}</p>
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
      <li id={this.props.metricLabel.replace(/\s+/g, '') + "display"}>
        <div className="dashboardheader">
          <h4>{this.props.metricName}</h4>
        </div>
        {DisplayContent}
      </li>
    );
  }
}

export default MetricsDisplayListItem;
