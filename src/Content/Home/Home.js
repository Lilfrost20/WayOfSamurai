import React from 'react';
import style from './Home.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {MyHeader} from "./MyHeader/MyHeader";
import {MyPage} from "./MyPage/MyPage";
import {StoreContext} from "../../index";


export function Home() {
    return (
         <div className={style.container}>
                    <MyHeader/>
                    <MyPage/>
                    <StoreContext.Consumer>
                        {store => {
                            const AddHandler = () => {
                                store.dispatch({type: 'AddPost'})
                            }
                            const ChangeHandler = (event) => {
                               store.dispatch({type: 'ChangePost', text: event.target.value})
                            }

                            return <MyPosts PostsData={store.getState().PostsData}
                                            AddHandler = {AddHandler}
                                            ChangeHandler={ChangeHandler}/>}
                    }
                    </StoreContext.Consumer>

         </div>
    )
}