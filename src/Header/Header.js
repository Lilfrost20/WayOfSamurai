import React from 'react';
import style from './Header.module.css'


export function Header() {
    return (
        <header className={style.header}>
            <h3 className={style.logo}>WayOfSamurai</h3>
        </header>
    )

}