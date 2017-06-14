import React, {Component} from 'react';
import Chartist from 'chartist';
import ctPointLabels from '../../ChartistUtils/ChartistUtils.js';
class MetricsGraph extends Component{
  componentDidMount() {
    let data = this.props.data;
    let ChartId = this.props.metricLabel.replace(/\s+/g, '') + "chart1";
    new Chartist.Line(
      "#" + ChartId,
      {
        labels: [],
        series: data,
      },
      {
        low: 0,
        chartPadding: {
          top: 30,
          right: 10,
          left: 0,
          bottom: 0,
        },
        fullWidth: true,
        showArea: true,
        axisX: {
          showGrid: false,
          showLabel: false
        },
        axisY: {
          showGrid: false,
          showLabel: false
        },
        plugins: [
          ctPointLabels({
            textAnchor: 'middle'
          })
        ]
      }
    );
  }
  render(){
    return (
      <div id={this.props.metricLabel.replace(/\s+/g, '') + "chart1"} className="graph"></div>
    );
  }
}

export default MetricsGraph;
