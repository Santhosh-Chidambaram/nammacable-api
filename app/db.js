const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.set("strictQuery", true);
mongoose.Promise = global.Promise;
let isConnected;

const connectToDB = async () => {
  if (isConnected) {
    console.log("=> using existing database connection");
    return;
  }
  await mongoose
    .connect(MONGODB_URI, {})
    .then((db) => {
      isConnected = db.connections[0].readyState;
      console.log(
        `Connected to Mongo! Database name: "${db.connections[0].name}"`
      );
    })
    .catch((err) => {
      console.error("Error connecting to mongo", err);
    });
  return mongoose;
};

const disconnectFromDB = async () => {
  return new Promise((resolve, reject) => {
    if (mongoose) {
      mongoose.connection.close(function (err) {
        if (err) {
          reject(err);
        }
        resolve();
      });
    }
  });
};

async function init() {
  await connectToDB();
}

async function shutdown() {
  await disconnectFromDB();
}

module.exports = {
  init,
  shutdown,
};
