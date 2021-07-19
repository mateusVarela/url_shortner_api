
const urlSchema = require('../models/original_url')

class UrlController {
    async saveNewUrl(req, res) {
        const {originalUrl, shortUrl} = req.body
        const data = {originalUrl, shortUrl}
        await urlSchema.create(data, (error) => {
            if(error)
            return res.status(400).json({
                error: true,
                message: "Erro ao tentar inserir URL no mongo."
            })

            return res.status(200).json({
                error: false,
                message: req.body,
            })
        })
    }

    async findUrl (req, res) {
        const shortUrls = await urlSchema.findOne({shortUrl: req.params.shortUrl})
        res.redirect(shortUrls.originalUrl)
    }
}

module.exports = new UrlController()
