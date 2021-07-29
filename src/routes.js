const { Router } = require('express');
const UrlController = require('./App/Controller/urlController');
const routes = new Router();

routes.post("/short", UrlController.saveNewUrl);
routes.get("/:shortUrl", UrlController.findUrl);

module.exports = routes;
