import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectMetric} from '../../actions/index.js';

class MetricsItem extends Component{
  render(){
    return(
      <td id={this.props.metricName.replace(/\s+/g, '') + "Cell"} onClick={()=> {this.props.selectMetric(this.props.metricName); this.props.onMetricClick(this.props.metricName);}}>
        <img src={this.props.url} alt=""/>
        {this.props.metricName}
      </td>
    );
  }
}

function mapStateToProps(state){
  return{
    availableMetrics: state.availableMetrics
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectMetric : selectMetric}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MetricsItem);
