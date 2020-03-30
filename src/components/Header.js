import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = ({userState}) => (
    <nav className="navbar navbar-expand-lg navbar-dar bg-dark" style={{color: 'white'}}>
        <div className="container">
            <ul className="navbar-nav mr-auto">
                {userState ? 
                    (<li className="nav-item">
                        <NavLink
                            to="/Datos"
                            className="nav-link"
                            activeClassName="active"
                            style={{color: 'white'}}
                        >Singup</NavLink>
                    </li>)
                    :
                    (<p></p>)
                }
                
                <li className="nav-item">
                    <NavLink
                        to="/login"
                        className="nav-link"
                        activeClassName="active"
                        style={{color: 'white'}}
                    >Login</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink
                        to="/Datos"
                        className="nav-link"
                        activeClassName="active"
                        style={{color: 'white'}}
                    >Datos</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink
                        to="/Grafico"
                        className="nav-link"
                        activeClassName="active"
                        style={{color: 'white'}}
                    >Gráfico</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink
                        to="/Heatmap"
                        className="nav-link"
                        activeClassName="active"
                        style={{color: 'white'}}
                    >Heatmap</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink
                        to="/HeatmapGrupos"
                        className="nav-link"
                        activeClassName="active"
                        style={{color: 'white'}}
                    >HeatmapGrupos</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink
                        to="/HeatmapInteraccinesGrupos"
                        className="nav-link"
                        activeClassName="active"
                        style={{color: 'white'}}
                    >HeatmapInteraccinesGrupos</NavLink>
                </li>
                
                <li className="nav-item">
                    <NavLink
                        to="/HeatmapInteracciones"
                        className="nav-link"
                        activeClassName="active"
                        style={{color: 'white'}}
                    >HeatmapInteracciones</NavLink>
                </li>
            </ul>
        </div>
    </nav>
)

export default Header;