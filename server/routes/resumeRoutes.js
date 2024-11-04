const express = require('express')
const { uploadResume, getAllResume } = require('../controllers/resumeController')
const upload = require('../utils/multer')
const resumeRouter = express.Router()

resumeRouter.post("/", upload.single("file"), uploadResume)
resumeRouter.get("/", getAllResume)

module.exports = resumeRouter
