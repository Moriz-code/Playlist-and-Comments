import React from 'react';

import CommentPreview from './CommentPreview';

export default function CommentList(props) {
    return (<React.Fragment>
        {props.comments.map(comment => <CommentPreview key={comment._id} comment={comment} />)}
    </React.Fragment>)


}
