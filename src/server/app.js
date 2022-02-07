let express = require("express");
let cors = require("cors");
let mongoose = require("mongoose");
let database = require("./database");
let bodyParser = require("body-parser");

// connect mangoDB

mongoose.Promise = global.Promise;
mongoose
  .connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database connected");
    },
    (error) => {
      console.log("Database couldn't be connected to" + error);
    }
  );

const budgeterAPI = require("../server/routes/budget.routes");
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());
// API
app.use("/api", budgeterAPI);
// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});
// Find 404
app.use((__, ___, next) => {
  next(createError(404));
});
// error handler
app.use(function (err, __, res, ___) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
