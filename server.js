const express = require('express');
const {con} = require('./db/dbconfig')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.use('/',require('./routes/index'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
