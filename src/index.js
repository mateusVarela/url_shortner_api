const app = require('./app')

/**
 * DB connection.
 */
const connection = require('./Config/connection')
connection()

const PORT = process.env.PORT || 5555
app.listen(PORT)