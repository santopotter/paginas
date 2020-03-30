import React, { Component } from "react";
import './App.css';
import Plot from 'react-plotly.js'

class HeatmapGrupos extends Component {
    render() {
        return (
          <Plot
            data={[
              {
                z:[[38.41,2.9,0.07,2.5], 
                [0, 0, 7.45, 0.38],
              [0, 13.2,6.9, 1.83],
              [0, 0, 0, 23.75],
              [10.2, 0.6, 9.9, 0.01],
              [0, 0.03, 6,6, 0.63],
              [0.12,0.59,1.37,0.68]],
             x:['Group 1','Group 2','Group 3','Group 4'],
             y:['B-T1', 'B-T2', 'B-T3','B-T4','B-S1','B-S2','B-S3'],
                type: 'heatmap',
                mode: 'lines+markers',
                marker: {color: 'YlOrRd'},
                colorscale:'YlOrRd'
              }
            ]}
            layout={ {width: 720  , height: 480, title: 'A Fancy Plot'} }
          />
        );
      }

}
export default HeatmapGrupos;
