import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectMetric} from '../../actions/index.js';

/*TODO: add the functionality to add a customized description to the metric to
  provide an additional annotation to clarify ambiguous metric categories.
*/

/*An individual metrics cell within the available metrics table. Allows user to
  toggle metrics in and out of view.
*/
class MetricsItem extends Component{
  render(){
    return(
      <td
        id={this.props.metricName.replace(/\s+/g, '') + "Cell"}
        onClick={()=> {
          this.props.selectMetric(this.props.metricName);
          this.props.onMetricClick(this.props.metricName);
        }}
      >
        <div className="metricTableContent">
        <img src={this.props.url} alt={this.props.metricName}/>
        {this.props.metricLabel}
      </div>
      </td>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectMetric : selectMetric}, dispatch);
}

export default connect(null, mapDispatchToProps)(MetricsItem);
