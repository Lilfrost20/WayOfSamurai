import React from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {connect} from 'react-redux'

function Dialogs(props) {
    return (
        <div className={style.container}>
            <div className={style.search}>
                <input type='text'/>
            </div>
            <div className={style.users}>
                {props.DialogsData.map(item => <DialogItem key={item.id} name={item.name}/>)}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        DialogsData: state.dialogs.DialogsData
    }
}


export default connect(mapStateToProps)(Dialogs)