const express = require("express");
require("./db/mongoose");
const userRoutes = require("./routers/user");
const taskRoutes = require("./routers/task");

const app = express();

const port = process.env.PORT || 3000;
const log = console.log;

app.use(express.json()); //to get the request data in json format
app.use(userRoutes);
app.use(taskRoutes);

app.listen(port, () => log("Server is up on port " + port));
