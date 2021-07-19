const mongoose = require('mongoose')
const db = 'mongodb+srv://mateus:mv123456@cluster0.a28pl.mongodb.net/url-short?retryWrites=true&w=majority'

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