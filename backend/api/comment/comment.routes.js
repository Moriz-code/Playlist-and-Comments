const { getComments, addComment } = require('./comment.controller');
const express = require('express');
const router = express.Router();

router.get('/', getComments)
router.post('/', addComment)

//do not ever forget this line!!!!
module.exports = router