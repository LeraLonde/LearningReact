import { combineReducers } from 'redux';
import PostReducer from './postsReducer';
import usersReducer from './userReducer';

// Rules of the reducer:-
// reducer should not reach out to an external service to determine the state
// it needs to be a pure function.
// Do not mutate the input 'state' of the reducer.
// There is a check within redux that check if the state have been changed. if the reference is the same there
// is a chance that it will not trigger a change on react.
// Create a new ref - [...old_arr]
// Create a new ref - {...old_obj}
// Lodash to delete the state :- _omit
export default combineReducers({
    posts: PostReducer,
    users: usersReducer
});