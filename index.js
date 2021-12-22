import express from 'express'
import mongodb, {
    ObjectId
} from 'mongodb'
import bodyParser from 'body-parser'
import cors from 'cors'
import {
    Database
} from './databse.js'
const app = express()
const port = 5000
const db = new Database(mongodb.MongoClient, "web2", "shows", "mongodb+srv://bilal:bicbilal1999@cluster0.skntf.mongodb.net/web2?retryWrites=true&w=majority")
app.use(bodyParser.json())
app.use(cors())

app.listen(port, async () => {
    console.log(`Backend running on port ${port}`)
})

app.get("/shows", async (req, res) => {
    let shows = await db.getAllShows()
    res.send(shows)
})