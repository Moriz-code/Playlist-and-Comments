import CommentService from './CommentService';

export function loadComments(filterBy) {
    return async dispatch => {
        try {
            const comments = await CommentService.query(filterBy);
            dispatch(setComments(comments));
        } catch (err) {
            console.log(`CommentActions : err in loadComments`);
        }
    }

}

function setComments(comments) {
    return {
        type: 'SET_COMMENTS',
        comments
    }
}


export function addComment(newComment) {
    return async dispatch => {
        try {
            const addedComment = await CommentService.add(newComment);
            dispatch(saveComments(addedComment))
        } catch (err) {
            console.log('can not save the comment ');
        }
    }

}


function saveComments(comment) {
    return {
        type: 'ADD_COMMENT',
        comment
    }
}