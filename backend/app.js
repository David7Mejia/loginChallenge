const express = require("express");
const cors = require("cors");
const csurf = require("csurf");
const cookieParser = require("cookie-parser");

//initiliaze express
const app = express();

//initialize cookie and express.json
app.use(cookieParser()); //middleware for parsing cookies
app.use(express.json()); //middleware for parsing json

//initialize cors
app.use(cors()); //middleware for enabling cors (Cross-Origin Resource Sharing)

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
