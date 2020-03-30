import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './login';
import Datos from'./Datos';
import Grafico from './Grafico';
import Heatmap from'./Heatmap';
import HeatmapGrupos from './HeatmapGrupos'
import HeatmapInteraccinesGrupos from './HeatmapInteraccinesGrupos';
import HeatmapInteracciones from './HeatmapInteracciones';
import Header from './components/Header';
import './App.css';

function App() {
  return (
   
    <div className="box">
    <Router>
      <Header/>
      <main className="container mt-5">
        <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Login" component={Login} /> 
        <Route exact path="/Datos" component={Datos} />
          <Route exact path="/Grafico" component={Grafico} />
          <Route exact path="/Heatmap" component={Heatmap} />
          <Route exact path="/HeatmapGrupos" component={HeatmapGrupos} />
          <Route exact path="/HeatmapInteraccinesGrupos" component={HeatmapInteraccinesGrupos} />
          <Route exact path="/HeatmapInteracciones" component={HeatmapInteracciones} />
          {/*<Route exact path="/heroes/:id" component={Producto} />
          <Route exact path="/comics/:id" component={EditarProducto} />*/}

        </Switch>
      </main>
    </Router>
   </div>
  )
}

export default App;
