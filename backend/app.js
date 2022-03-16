const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const parse = require('csv-parser');
const fs = require('fs');
const csrf = require("csurf");
const routes = require("./routes");

//initiliaze express
const app = express();

//initialize cookie and express.json
app.use(cookieParser()); //middleware for parsing cookies
app.use(express.json()); //middleware for parsing json

//initialize cors
app.use(cors()); //middleware for enabling cors (Cross-Origin Resource Sharing)

//initialize csrf protection
app.use(csrf({ cookie: true }));

app.use(routes);

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
