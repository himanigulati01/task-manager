const express = require("express");
const Users = require("./models/users");
const Tasks = require("./models/tasks");
require("./db/mongoose");

const app = express();

const port = process.env.PORT || 3000;
const log = console.log;

app.use(express.json()); //to get the request data in json format

app.post("/users", (req, res) => {
  const user = new Users(req.body);
  user
    .save()
    .then((user) => res.status(201).send(user))
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get("/users", (req, res) => {
  Users.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send();
    });
});

app.get(`/users/:id`, (req, res) => {
  Users.findById(req.params.id) //req.params will get the id from the route
    .then((user) => {
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.post("/tasks", (req, res) => {
  const task = new Tasks(req.body);

  task
    .save()
    .then((task) => res.status(201).send(task))
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get("/tasks", (req, res) => {
  Tasks.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send();
    });
});
app.get(`/tasks/:id`, (req, res) => {
  Tasks.findById(req.params.id) //id is directly converted to object id through mongoose.
    .then((task) => {
      if (!task) {
        return res.status(404).send();
      }
      res.send(task);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
app.listen(port, () => log("Server is up on port " + port));
