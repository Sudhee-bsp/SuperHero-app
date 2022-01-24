import mongoose from "mongoose";

// a global variable to use
const connect = {};

async function connectToDB() {
  if (connect.isConnected) {
    console.log("=> using existing database connection");
    return;
  }

  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  connect.isConnected = db.connections[0].readyState;
  console.log("=> using database connection");
}

export default connectToDB;
