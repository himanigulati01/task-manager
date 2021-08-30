const express = require("express");
const router = new express.Router();
const Users = require("../models/users");

//Create
router.post("/users", async (req, res) => {
  const user = new Users(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

//Read All
router.get("/users", async (req, res) => {
  try {
    const users = await Users.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }
});

//Read One
router.get(`/users/:id`, async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    if (!user) return res.status(404).send({ msg: "user not found" });
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

//Update
router.patch(`/users/:id`, async (req, res) => {
  //for the properties which are not in db
  const updates = Object.keys(req.body);
  const allowupdates = ["name", "age", "email", "password"];
  const isValid = updates.every((update) => allowupdates.includes(update));
  if (!isValid) {
    return res.status(400).send({ error: "invalid" });
  }
  try {
    const user = await Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) return res.status(404).send({ msg: "user not found" });
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

//Delete

router.delete("/users/:id", async (req, res) => {
  try {
    const user = await Users.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send({ msg: "user not found" });
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});
module.exports = router;
