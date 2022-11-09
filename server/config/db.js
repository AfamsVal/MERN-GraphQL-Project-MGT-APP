const mongoose = require("mongoose");

const connectDB = async () => {
  const username = process.env.MONGO_DB_USERNAME;
  const password = process.env.MONGO_DB_PWD;
  const cluster = process.env.MONGO_DB_CLUSTER;
  const dbname = process.env.MONGO_DB_NAME;
  const URI = `mongodb+srv://${username}:${password}@${cluster}.j7zxiab.mongodb.net/${dbname}?retryWrites=true&w=majority`;
  try {
    const conn = await mongoose.connect(URI);
    console.log(
      `MongoBD Connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.log("DB ERR:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
