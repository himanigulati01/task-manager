const express = require("express");
require("./db/mongoose");
const userRoutes = require("./routers/user");
const taskRoutes = require("./routers/task");
const bcrypt = require("bcrypt")

const app = express();

const port = process.env.PORT || 3000;
const log = console.log;

app.use(express.json()); //to get the request data in json format

// ! Routes for user and task
app.use(userRoutes);
app.use(taskRoutes);

app.listen(port, () => log("Server is up on port " + port));

const myfunc =  async () => {
    const PASSWORD = "himani@2001."
    const HASHED_PASS = await bcrypt.hash(PASSWORD,8)
    const isMatch = await bcrypt.compare("himani@2001.",HASHED_PASS)
    console.log(HASHED_PASS)
    console.log(isMatch)
}

myfunc()