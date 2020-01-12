import _ from 'lodash';
import JsonPlaceHolder from '../api/JsonPlaceHolder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // Calling an action creator from within an action creator
    // Await keyword will ensure we wait for that piece of line completed before going forward
    await dispatch(fetchPosts());

    //.map will automatically receive getState().posts - so only pass in the 2nd argument
    // result of map will be pass on to .uniq
    // .value() is mandatory for the chain to execute the line.
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach((id) => dispatch(fetchUser(id)))
        .value();

    // Before refactor
    //const userId = _.uniq(_.map(getState().posts, 'userId'));
    // it doesn't matter when we get the id. - we dont need to wait.
    // hence await is not required.
    // async await syntax does not work within forEach - instead use map + promise
    //userId.forEach(id => dispatch(fetchUser(id)));
};

// Redux-thunk allow u to return a function
// without it you can only return a Plain Json object
export const fetchPosts = () => async (dispatch) => {
    const response = await JsonPlaceHolder.get('/posts');
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
};

// Whenever you create an action -> it will go through redux-thunk before sending to reducer
// with redux-thunk :- it gives us the ability to return a function/object on an action creator
export const fetchUser = (id) => async (dispatch) => {
    const response = await JsonPlaceHolder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
};

/* Memoized Example
export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);
// Private function = functio that starts with underscore
// Wrap it around a private method and memoize it
// if we need to refresh the data then we are dead. not flexible for change.
const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await JsonPlaceHolder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
});
*/
