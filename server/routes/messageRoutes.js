const express = require('express')
const {sendMessage,getAllMessages} = require('../controllers/messageControllers')
const messageRouter = express.Router()

messageRouter.post("/",sendMessage)
messageRouter.get("/",getAllMessages)

module.exports = messageRouter