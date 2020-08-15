import {reducer} from "./reducer";

let store = {
    state: {
        DialogsData: [
            {name: 'alex', id: 1},
            {name: 'valera', id: 2},
            {name: 'stepan', id: 3},
            {name: 'pavel', id: 4},
            {name: 'dima', id: 5},
            {name: 'nikita', id: 6},],
        PostsData: {
            posts: [
                {text: 'post1', id: 1},
                {text: 'post2', id: 2},
                {text: 'post3', id: 3},
            ],
            newPostData: ''
        }
    },

    getState() {
        return this.state
    },

    dispatch(action) {
        this.state.PostsData = reducer(this.state.PostsData, action)
        this.Rerender(this.state)
    },

    Subscribe(observer) {
        this.Rerender = observer
    },  
    Rerender()  {

    }

}

window.store = store.state.PostsData

export default store