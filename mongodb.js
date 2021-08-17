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
    db.collection("tasks")
      .deleteOne({ description: "do yoga" })
      .then((res) => log(res))
      .catch((rej) => log(rej));
  }
);
