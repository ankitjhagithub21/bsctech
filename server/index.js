require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./db/conn')
const messageRouter = require('./routes/messageRoutes')
const resumeRouter = require('./routes/resumeRoutes')
const app = express()
const port = process.env.PORT || 5000


connectDB()

app.use(express.static("./public"))
app.use(express.json())
app.use(cors({
  origin:process.env.ORIGIN,
  credentials:true
}))


app.get('/', (req, res) => {
  res.json({
    message:"Api working."
  })
})

app.use("/api/messages",messageRouter)
app.use("/api/resume",resumeRouter)


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})