const { MongoClient, ObjectId } = require("mongodb");

const connectionUrl = "mongodb://127.0.0.1:27017";
const dbName = "task-manager";

const log = console.log;

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) return log("unable to connect");

    const db = client.db(dbName);
    // db.collection("tasks").insertOne({
    //   description: "homework",
    //   completed: true,
    // });
    db.collection("tasks")
      .find({ completed: true })
      .toArray((error, result) => log(result));

    // db.collection("users").insertOne(
    //   {
    //     _id: 1,
    //     name: "jay",
    //     age: 45,
    //   },
    //   (error, result) => {
    //     if (error) return log("unable to connect");
    //     return log(result.insertedId);
    //   }
    // );

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "new yoga",
    //       completed: true,
    //     },
    //     {
    //       description: "bring milk",
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) return log("database error");

    //     console.log(result.acknowledged);
    //   }
    // );
  }
);
