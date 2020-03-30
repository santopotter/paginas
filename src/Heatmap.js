import React, { Component } from "react";
import './App.css';
import Plot from 'react-plotly.js'

class Heatmap extends Component {
    render() {
        return (
          <Plot
            data={[
              {
                z:[[71,15,70,16,53,0, 0, 0,60,0, 0,0, 14, 0,0,0], 
                [0, 0, 0, 0, 0, 0, 0,0,0,27,17,0, 0, 0,2,0],
                [0, 0, 0, 0, 0, 8,25,44,0,0,0,31, 0, 0,10,0],
                [0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,43,47],
                [0,0,0,0,0, 0, 0, 0,3,7 ,11,0, 0, 0,0,0], 
                [0, 0, 0, 0, 0, 0,0,0,0,0,0,0, 0,40,3,0],
                [0, 0, 0, 1, 0, 0,0,0,2,3,4,0, 2, 0,4,0]],
                x:['Id2','Id3','Id4','Id5','Id12','Id6', 'Id7','Id9', 'Id11', 'Id1','Id13','Id16','Id8', 'Id10','Id14','Id15'],
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
export default Heatmap;
