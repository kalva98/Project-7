import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = (props) => {
    return (
       
            <nav className="main-nav">
                <ul>
                    <li><NavLink to="/hydrangeas" onClick={() => { props.performSearch("hydrangeas") }} > Hydrangeas </NavLink></li>
                    <li><NavLink to="/mountains" onClick={() => {props.performSearch("mountains") }} > Mountains </NavLink></li>
                    <li><NavLink to="/forest" onClick={() => { props.performSearch("forest") }} > Forest </NavLink></li>
                </ul>
            </nav>
       
    )
}

export default Nav;