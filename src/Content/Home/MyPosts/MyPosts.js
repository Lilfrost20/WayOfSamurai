import React from 'react';
import style from './MyPosts.module.css'
import {PostItem} from "./PostItem/PostItem";

export function MyPosts(props) {


    return (
        <div className={style.containerMyPosts}>
            <div className={style.form}>
                <textarea onChange={props.ChangeHandler}
                          value={props.PostsData.newPostData}
                          placeholder='type something'></textarea>
                <button onClick={props.AddHandler}>Send</button>
            </div>
            {props.PostsData.posts.map(item => <PostItem text={item.text} />)}
        </div>
    )
}