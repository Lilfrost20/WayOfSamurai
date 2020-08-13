import React from 'react';
import style from './Nav.module.css'
import {NavLink} from "react-router-dom";





export function Nav() {
    return (
        <nav className={style.nav}>
            <NavLink className={style.item} to="/home">Home</NavLink>
            <NavLink className={style.item} to="/dialogs">Dialogs</NavLink>
        </nav>
    )

}