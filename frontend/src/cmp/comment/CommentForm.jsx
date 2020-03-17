
import React, { useState, useEffect } from 'react';


const CommentForm = (props) => {
    // console.log(props);

    const [comment, setComment] = useState({ email: '', msg: '' })

    const handleChange = (ev) => {
        const { name, value } = ev.target;
        setComment({ ...comment, [name]: value })
    }


    const onSave = (ev) => {
        ev.preventDefault();
        props.onAddComment(comment);
    }

    // useEffect(() => {
    //     console.log('change', comment);
    // }, [comment])

    return (<React.Fragment>

        <input name="email" value={comment.email} onChange={handleChange} type="text" placeholder="Email"></input>
        <textarea name="msg" value={comment.msg} onChange={handleChange} type="text" placeholder="Comment" />
        <button onClick={onSave}>Submit</button>

    </React.Fragment>)
}

export default CommentForm


