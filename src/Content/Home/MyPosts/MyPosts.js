import React from 'react';
import style from './MyPosts.module.css'
import {PostItem} from "./PostItem/PostItem";

export function MyPosts(props) {
    return (
        <div className={style.containerMyPosts}>
            <div className={style.form}>
                <textarea placeholder='type something'></textarea>
                <button>Send</button>
            </div>
            {props.PostsData.map(item => <PostItem text={item.text} />)}
        </div>
    )
}