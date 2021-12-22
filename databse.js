class Database {
    constructor(mongoclient, database, collection, url) {
        this.mongoclient = mongoclient
        this.url = url
        this.database = database
        this.collection = collection
    }

    async getAllShows() {
        const client = await this.mongoclient.connect(this.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const db = client.db(this.database).collection(this.collection)
        const shows = await db.find({}).toArray()
        client.close()
        return shows
    }

    async getShow(id) {
        const client = await this.mongoclient.connect(this.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const db = client.db(this.database).collection(this.collection)
        const show = await db.find({
            _id: id
        })
        client.close()
        return show
    }

    async addShow(show) {
        const client = await this.mongoclient.connect(this.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const db = client.db(this.database).collection(this.collection)
        const newShow = await db.insertOne(show)
        client.close()
        return newShow
    }





}

export {
    Database
}