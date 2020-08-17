import React from 'react';
import style from './MyPosts.module.css'
import PostItem from "./PostItem/PostItem";
import {connect} from "react-redux";

function MyPosts(props) {
    return (
        <div className={style.containerMyPosts}>
            <div className={style.form}>
                <textarea onChange={props.ChangeHandler}
                          value={props.newPostData}
                          placeholder='type something'></textarea>
                <button onClick={props.AddHandler}>Send</button>
            </div>
            {props.PostsData.map(item => <PostItem key={item.id} text={item.text} />)}
        </div>
    )
}

function mapStateToProps(state){
    return {
        PostsData: state.home.posts,
        newPostData: state.home.newPostData
    }
}
function mapDispatchToProps(dispatch){
    return {
        AddHandler: () => dispatch({type: 'AddPost'}),
        ChangeHandler: (event)=> dispatch({type: 'ChangePost', text: event.target.value})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)