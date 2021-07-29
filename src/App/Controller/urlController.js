
const urlSchema = require('../models/urlSchema')
const shortId = require('shortid')

class UrlController {
    async saveNewUrl(req, res) {
        const {originalUrl} = req.body
        const shortUrl =  shortId.generate()
        const data = {originalUrl, shortUrl}
        const USER_URL = `https://usapim.herokuapp.com/${shortUrl}`
        await urlSchema.create(data, (error) => {
            if(error)
            return res.status(400).json({
                error: true,
                message: "Erro ao tentar inserir URL no mongo."
            })

            return res.status(200).json({
                error: false,
                USER_URL
            })
        })
    }

    async findUrl (req, res) {
        const shortUrls = await urlSchema.findOne({shortUrl: req.params.shortUrl})
        res.redirect(shortUrls.originalUrl)
    }
}

module.exports = new UrlController()
