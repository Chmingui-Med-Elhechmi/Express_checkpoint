const express = require("express");
const app = express();
app.set('views','./views')

const port = 5000;

app.get("/", (req, res) => {
  res.render("./");
});

const userRouter = require("./routes/route");
app.use("/", userRouter);

let currentDate = new Date();

reqTime = (req, res, next) => {
  console.log(req.originaURL, currentDate.getDay());
  if (
    currentDate.getHours() > 9 &&
    currentDate.getHours() < 17 &&
    currentDate.getDay() > 0 &&
    currentDate.getDay() < 6
  )
    next();
};
// app.use(express.static('views'))
app.listen(port)

// app.listen(port, (err) => {
//   err ? console.log(err) : console.log("the server is runnig");
// });

// app.get("/hello", (req, res) => {
//   res.send("hello world");
// });
