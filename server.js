const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'));;


app.listen(port, () => console.log(`Proxy listening on http://localhost:${port}!`))