const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("user");
});

router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({ name: req.body.username });
    res.redirect(`users/${users.length - 1}`);
  } else {
    console.log("error");
    res.render("users/new", { username: req.body.username });
  }
});

router.get("/new", (req, res) => {
  res.render("users/new", { username: "Kyle" });
});

router
  .route("/:id")
  .get((req, res) => {
    console.log("req params:", req.name);
    res.send(`get user by ID: ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`update user by ID: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`delete user by ID: ${req.params.id}`);
  });

const users = [{ name: "Kyle" }, { name: "Sally" }, { name: "Joe" }];

router.param("id", (req, res, next, id) => {
  req.name = users[id].name;
  // console.log(`id:${id}`);
  next();
});

// router.get("/:id", (req, res) => {
//   req.params.id;
//   res.send(`get user by ID: ${req.params.id}`);
// });

// router.put("/:id", (req, res) => {
//   req.params.id;
//   res.send(`update user by ID: ${req.params.id}`);
// });

// router.delete("/:id", (req, res) => {
//   req.params.id;
//   res.send(`delete user by ID: ${req.params.id}`);
// });

module.exports = router;
