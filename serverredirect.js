const express = require("express");
const app = express();
const childProcess = require('child_process');

app.use("/",function (request, response) {
  childProcess.execSync('node app.js').toString();
  response.redirect("localhost:3000")
});

app.listen(process.env.PORT);