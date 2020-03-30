import React, { Component } from "react";
import './App.css';
import Plot from 'react-plotly.js'

class HeatmapInteraccinesGrupos extends Component {
    render() {
        return (
          <Plot
            data={[
              {
                z :[[1, 3, 1, 15], 
                [0, 1, 6, 4],
                [4, 10, 14, 6]],
                x : ['Group 1','Group 2','Group 3','Group 4'],
                y : ['B-S1','B-S2','B-S3'],
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
export default HeatmapInteraccinesGrupos;
