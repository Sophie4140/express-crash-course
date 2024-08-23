const { db } = require("../src/drizzle/db");
const express = require("express");
const router = express.Router();
const { UserTable } = require("../src/drizzle/schema");

router.get("/", (req, res) => {
  console.log(req.query.name);
  // db.users.find({ name: req.query.name }).then((users) => {
  res.send("user");
});

router.get("/list", async (req, res) => {
  const users = await db
    .select({
      columns: { name: true, age: true },
    })
    .from(UserTable);
  if (users.length > 0) {
    res.render("users/userList", { users });
  } else {
    res.render("users/new");
  }
});

router.post("/", async (req, res) => {
  try {
    await db.insert.UserTable.values({
      name: req.body.name,
      age: req.body.age,
    });
    res.redirect("users/list");
    // res.redirect(`users/${users.length - 1}`);
  } catch (e) {
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
