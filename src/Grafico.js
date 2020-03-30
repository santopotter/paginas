import React, { Component } from "react";
import './App.css';
import Plot from 'react-plotly.js'


class Grafico extends Component {
    render() {
        return (
          <Plot
            data={[

              {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
            ]}
            layout={ {barmode:'stack', width: 320, height: 240, title: 'A Fancy Plot'} }
          />
        );
      }
}
export default Grafico;
