import React from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";

export function Dialogs(props) {

    return (
        <div className={style.container}>
            <div className={style.search}>
                <input type='text'/>
            </div>
            <div className={style.users}>
                {props.DialogsData.map(item => <DialogItem name={item.name}/>)}
            </div>
        </div>
    )
}