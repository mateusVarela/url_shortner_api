const express = require('express');
const cors = require('cors');
const routes = require('./routes');
require("./config/connection")

class App {
    constructor() {
      this.app = express();
      this.middlewares();
      this.routes();
    }
  
    middlewares() {
      this.app.use(express.json());
      this.app.use(cors());
      this.app.use((req, res, next) => {
        res.header("Access-Controll-Allow-Origin", "*");
        res.header("Access-Controll-Allow-Methods", "Get, POST, PUT, DELETE");
        res.header("Access-Controll-Allow-Headers", "Access, Content-type, Authorization, Acept, Origin, X-Requested-With")
        next();
      })
    }
  
    routes() {
      this.app.use(routes);
    }
  }

/**
 * Necessário para poder usar o App em outros arquivos.
 */
module.exports = new App().app