const express = require('express')
const path = require('path')

let PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
let app = express();
let PORT = process.env.PORT || 3010;

app.use(express.json())
app.use(express.static(PUBLIC_DIR));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})