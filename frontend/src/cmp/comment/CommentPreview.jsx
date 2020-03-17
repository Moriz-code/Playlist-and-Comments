import React from 'react';

export default function CommentPreview(props) {
    const { comment } = props
    return (
        <div>
            <h3>{comment.email}</h3>
            <p>{comment.msg}</p>
        </div>
    )
}
