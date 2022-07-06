const mongoose = require("mongoose");

// connection
const dbuser = process.env.DB_USER;
const dbpassword = process.env.DB_PASS;

const conn = async () => {
  try {
    const dbConn = await mongoose.connect(
      `mongodb+srv://${dbuser}:${dbpassword}@cluster0.9nn2c.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log("Conectou ao banco");

    return dbConn;
  } catch (error) {
    console.log(error);
  }
};

conn();

module.exports = conn;
