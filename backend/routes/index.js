const express = require("express");
const router = express.Router();
const path = require("path");
const asyncHandler = require("express-async-handler");


router.get("/",(req, res) =>{
  res.cookie("XSRF-TOKEN", req.csrfToken());
  console.log(req.csrfToken());
    res.sendFile(path.resolve(__dirname, "../../frontend", "public", "index.html"));
    return res.json('vsdvsv')
});


router.post("/", asyncHandler(async (req, res, next) => {
    const { username, password } = req.body;
    console.log(username, password);
    return res.json('fsadasadasdasdsada');
  })
);
module.exports = router;
