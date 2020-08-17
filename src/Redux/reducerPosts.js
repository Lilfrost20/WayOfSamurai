
let initialState = {
        posts: [
            {text: 'post1', id: 1},
            {text: 'post2', id: 2},
            {text: 'post3', id: 3},
        ],
        newPostData: '',
    }


export const reducerPosts = (state = initialState, action) => {
    if (action.type === 'AddPost') {
        return {
            ...state,
            newPostData: '',
            posts: [...state.posts, {text: state.newPostData, id: 4}]
        }
    } else if (action.type === 'ChangePost') {
        return {
            ...state,
            newPostData: action.text
        }

    }
    return state
}


