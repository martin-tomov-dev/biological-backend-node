const users = require("../controllers/users.controller.js");

var router = require("express").Router();

// Create a new users
router.post("/", users.create);

// login with a new user.
router.post("/login", users.compare);

// Retrieve all users
router.get("/", users.findAll);

// Retrieve a single user with id
router.get("/:id", users.findOne);

// Update a user with id
router.put("/:id", users.update);

// Delete a user with id
router.delete("/:id", users.delete);

// Delete all users
router.delete("/", users.deleteAll);

module.exports = router;
