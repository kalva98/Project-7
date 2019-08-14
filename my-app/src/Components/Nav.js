import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <BrowserRouter>
            <nav>
            <ul>
                <li><NavLink to="/flowers">Flowers</NavLink></li>
                <li><NavLink to="/cabin">Cabin</NavLink></li>
                <li><NavLink to="/forest">Forest</NavLink></li>
            </ul>
            </nav>
        </BrowserRouter> 
    )
}

export default Nav;