const commentService = require('./comment.service');

async function getComments(req, res) {
    const comments = await commentService.query(req.query)
    res.send(comments)
}

async function addComment(req, res) {
    const addedComment = await commentService.add(req.body)
    res.send(addedComment)
}


module.exports = {
    getComments,
    addComment
}