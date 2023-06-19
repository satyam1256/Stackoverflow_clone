const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const questionRouter = require('./Question')
const answerRouter = require('./Answer')
const commentRouter = require('./Comment')

// const { Question, Answer, Comment } = require('../models');

router.get('/', (req, res) => {
    res.send('Welcome to Stackoverflow Clone API');

});

router.use('/question', questionRouter);
router.use('/answer', answerRouter);
router.use('/comment', commentRouter);

module.exports = router;