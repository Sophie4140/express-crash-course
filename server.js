const express = require("express");
const app = express();

app.use(express.static("public")); // 'express.static()' that's a super handy way to be able to render out just static html or if you have css or javascript , it's just allowing us to access static files directly from the public folder
app.use(express.urlencoded({ extended: true })); // this allows us to access the body of the request
// app.use(express.json()); // this allows us to access the body of the request

app.set("view engine", "ejs");
// app.use(logger);

app.get("/", logger, (req, res, next) => {
  // if you only want to apply to individual endpoints, you can put 'looger' here
  console.log("here");
  // res.send("Hello World");
  // res.sendStatus(500);
  // res.status(500).send("Something broke!");
  // res.status(500).json({ message: "Something broke!" });
  // res.download("server.js");
  // res.render("index");
});

app.get("users", (req, res) => {
  res.send("user");
});

// note: everything is top to bottom, so if you have a middleware that u want to use everywhere on all of ur router, always define it at the very top of you page or you don't want it to be used everywhere, you can user it on individual endpoints
app.use(logger); // if u put this here, it will not work when u access the '/users'

app.get("users/new", (req, res) => {
  res.send("new user");
});

const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");

app.use("/users", usersRouter);
app.use("/posts", postsRouter);

function logger(req, res, next) {
  console.log("log url:", req.originalUrl);
  next();
}

app.listen(3000);
