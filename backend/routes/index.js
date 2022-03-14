const express = require("express");
const router = express.Router();
const path = require("path");
const asyncHandler = require("express-async-handler");
const parse = require("csv-parser");
const fs = require("fs");

let csv_data = {};

fs.createReadStream("./logindata.csv")
  .pipe(parse())
  .on("data", (csvrow) => {
    try {
      //save data as in object, username for unique values
      csv_data[csvrow.Username] = {
        Username: csvrow.Username,
        Password: csvrow.Password,
        Name: csvrow.Name,
        Id: csvrow.Id,
      }
    } catch (error) {
      console.log(error);
    }
  })
  .on("end", function () {
    console.log("this is csv data", csv_data);
    console.log("CSV file successfully processed");
  });

router.get("/",(req, res) =>{
  res.cookie("XSRF-TOKEN", req.csrfToken());
  // res.sendFile(path.join(__dirname, "../../public/index.html"));
    return res.json('Hello, server is up React app hosted on port 3000')
});


router.post("/", asyncHandler(async (req, res, next) => {
    const { username, password } = req.body;
  // console.log('this is combination', csv_data, username, password);

  if (!csv_data[username]) {
    const err = new Error("USER NOT FOUND");
    err.status = 401;
    err.title = "USER NOT FOUND:";
    err.errors = ['The credentials do not match our records. Please verify credentials.'];
    console.log(err.title, err.errors[0])
    return next(err)
  }
  if (csv_data[username].Password === password) {
  res.sendFile(path.join(__dirname, "../../public/test.html"))
}
  console.log(csv_data[username].Password === password);
  // console.log(csv_data[username].Password);
  // console.log(password)

    return res.json('fsadasadasdasdsada');
  })
);
module.exports = router;
