import React from 'react';
import style from './DialogItem.module.css'
import user from '../../../icons/user.svg'


export function DialogItem(props) {
    return (
        <div className={style.user}>
            <img className={style.img} src={user} alt="user"/>
            <h3 className={style.name}>{props.name}</h3>
        </div>
    )
}