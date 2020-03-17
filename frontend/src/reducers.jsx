import { combineReducers } from 'redux';
import CommentReducer from './comment/CommentReducer';

const rootReducer = combineReducers({
    comment: CommentReducer
})

export default rootReducer;