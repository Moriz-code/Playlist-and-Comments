import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import CommentForm from '../cmp/comment/CommentForm';
import CommentList from '../cmp/comment/CommentList';
import CommentFilter from '../cmp/comment/CommentFilter';

import { loadComments, addComment } from '../comment/CommentAction';


// Questions: 
// 1. why should i use es6 function in hooks? - looks better! read more about it. 
// 2. async with hooks - seperate function?? 
// 3. how do i use the connect instead of the props shit?
// 4. how can i use reducers withput the combaine reducer? 
// 5. what should be async - CommentService??
//6. should i use a"local" var in the function if im using redux? 
//7. what is the right way to use load comments with hooks? 

const HomePage = (props) => {



    //should i use it with redux?

    useEffect(() => {
        props.loadComments();
    }, [])


    useEffect(() => {
        // props.loadComments();
    }, [props.comments])


    const onAddComment = async (comment) => {
        await props.addComment(comment)
    }

    const onSearch = (searchTerm) => {

        console.log('text to look for', searchTerm);

        props.loadComments({ 'msg': searchTerm });
    }



    return (
        <div className="container">
            <h1>Comments</h1>
            <div className="form">
                <CommentForm onAddComment={onAddComment} />
            </div>
            <div className="comments">
                <CommentFilter onSearch={onSearch} />
                <CommentList comments={props.comments} />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        comments: state.comment.comments
    };
};

const mapDispatchToProps = {
    loadComments,
    addComment
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);

