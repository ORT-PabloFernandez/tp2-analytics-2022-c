var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const customersRouter = require("./routes/customers");
const accountsRouter = require("./routes/accounts");
const transactionsRouter = require("./routes/transactions");
const customerByEmail = require("./routes/customerByEmail");
const customersByNAccounts = require("./routes/customersByNAccounts");
const accountsByLimit = require("./routes/accountsByLimit");
const customersByAccountLimit = require("./routes/customersByAccountLimit");
const transactionsByCustomer = require("./routes/transactionsByCustomer");

const cors = require("cors");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/users/", usersRouter);
app.use("/api/customers/", customersRouter);
app.use("/api/accounts/", accountsRouter);
app.use("/api/transactions/", transactionsRouter);
app.use("/api/customerByEmail/", customerByEmail);
app.use("/api/customersByNAccounts/", customersByNAccounts);
app.use("/api/accountsByLimit/", accountsByLimit);
app.use("/api/customersByAccountLimit/", customersByAccountLimit);
app.use("/api/transactionsByCustomer/", transactionsByCustomer);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
