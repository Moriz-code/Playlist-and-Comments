const INITIAL_STATE = {
    comments: []
};

export default function CommentReducer(state = INITIAL_STATE, action) {
    // console.log('CommentReducer', );
    switch (action.type) {
        case 'SET_COMMENTS':
            return { ...state, comments: action.comments };

        case 'ADD_COMMENT':
            return { ...state, comments: [...state.comments, action.comment] };

        default:
            return state
    }

}





