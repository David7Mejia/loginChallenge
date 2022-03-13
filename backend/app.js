const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const parse = require('csv-parser');
const csrf = require("csurf");
const fs = require('fs')
//initiliaze express
const app = express();

//initialize cookie and express.json
app.use(cookieParser()); //middleware for parsing cookies
app.use(express.json()); //middleware for parsing json

//initialize cors
app.use(cors()); //middleware for enabling cors (Cross-Origin Resource Sharing)

app.use(csrf({
  cookie: true,
}))

let csv_data = {};

fs.createReadStream("./logindata.csv")
  .pipe(parse())
  .on('data', (csvrow) => {
    try {
      csv_data[csvrow.Id] = csvrow;
    }
    catch (error) {
      console.log(error)
    }
  })
  .on('end', function () {
    console.log('this is csv data', csv_data)
    console.log('CSV file successfully processed');
  });

app.get('/', (req, res) => {
    res.send(csv_data[1])
});


const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
