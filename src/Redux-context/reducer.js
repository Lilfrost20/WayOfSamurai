export const reducer = (state, action) => {

    if (action.type === 'AddPost') {
        let newPost = {text: state.newPostData, id: 4}
        state.posts.push(newPost)
        state.newPostData = ''
    } else if (action.type === 'ChangePost') {
        state.newPostData = action.text

    }

    return state
}