import React from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {StoreContext} from "../../index";

export function Dialogs() {

    return (
        <StoreContext.Consumer>
            { store => (
                <div className={style.container}>
                    <div className={style.search}>
                        <input type='text'/>
                    </div>
                    <div className={style.users}>
                        {store.getState().DialogsData.map(item => <DialogItem name={item.name}/>)}
                    </div>
                </div>)
            }

        </StoreContext.Consumer>
    )
}