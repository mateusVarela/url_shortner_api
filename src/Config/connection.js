const mongoose = require('mongoose')
require('dotenv').config();
const db = `mongodb+srv://mateus:${process.env.mongo_pass}@cluster0.a28pl.mongodb.net/url-short?retryWrites=true&w=majority`

const connection = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true
        })
        console.log("conectou ao banco");
    } catch (err) {
        console.log("Não foi possivel se conectar ao banco.");
    }
}

module.exports = connection