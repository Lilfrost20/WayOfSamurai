import React from 'react';
import style from './Content.module.css'
import {Home} from "./Home/Home";
import {Dialogs} from "./Dialogs/Dialogs";
import {Route} from "react-router-dom";




export function Content(props) {
    return (
            <div className={style.content}>
                <Route path='/home' render={()=> <Home PostsData={props.PostsData}/>}/>
                <Route path='/dialogs' render={()=> <Dialogs DialogsData={props.DialogsData} />}/>
            </div>
    )
}