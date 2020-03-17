import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {

    return (<div className="navbar">
        <NavLink to='/' exact>Comments</NavLink>
        <NavLink to='/Playlist' exact>Playlist</NavLink>
    </div>)

}
