import React, {Component} from 'react';

class MetricsItem extends Component{
  render(){
    return(
      <td id={this.props.metricName.replace(/\s+/g, '') + "Cell"} onClick={()=> this.props.onMetricClick(this.props.metricName)}>
        <img src={this.props.url} alt=""/>
        {this.props.metricName}
      </td>
    );
  }
}

export default MetricsItem;
