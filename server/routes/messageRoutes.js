const express = require('express')
const sendMessage = require('../controllers/messageControllers')
const messageRouter = express.Router()

messageRouter.post("/",sendMessage)

module.exports = messageRouter