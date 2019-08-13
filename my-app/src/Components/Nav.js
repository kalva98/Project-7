import React, { Component } from 'react';
import { navLink } from 'react-router-dom';

const Nav = () => (
    <nav>
        <ul>
            <li><navLink to="/flower">Flower</navLink></li>
            <li><navLink to="/cabin">Cabin</navLink></li>
            <li><navLink to="/forest">Forest</navLink></li>
        </ul>
    </nav>
    )
    
export default Nav;