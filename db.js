const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log(`connected to db on ${conn.connection.host}`);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
