import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return (
       
            <nav className="main-nav">
                <ul>
                    <li><NavLink to="/flowers" onClick={() => { props.performSearch("flowers") }} > Flowers </NavLink></li>
                    <li><NavLink to="/cabin" onClick={() => {props.performSearch("cabin") }} > Cabin </NavLink></li>
                    <li><NavLink to="/forest" onClick={() => { props.performSearch("forest") }} > Forest </NavLink></li>
                </ul>
            </nav>
       
    )
}

export default Nav;