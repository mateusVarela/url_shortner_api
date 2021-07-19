const mongoose = require('mongoose')
const shortId = require('shortid')

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        default: shortId.generate,
    },
    createdAt: { 
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('URL', urlSchema)