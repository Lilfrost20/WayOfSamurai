import React from 'react';
import style from './Home.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {MyHeader} from "./MyHeader/MyHeader";
import {MyPage} from "./MyPage/MyPage";

function Home() {
    return (
         <div className={style.container}>
                    <MyHeader/>
                    <MyPage/>
                    <MyPosts />
         </div>
    )
}

export default Home