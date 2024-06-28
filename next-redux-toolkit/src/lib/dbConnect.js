import mongoose from "mongoose";

type ConnectObject = {
  isConnect?: number,
};

const connection: ConnectObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnect) {
    console.log("Already connected is db");
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || " ");
    connection.isConnect = db.connections[0].readystate;
    console.log("db connected succefully");
  } catch (error) {
    console.log("db connected fail", error);
    process.exit();
  }
}

export default dbConnect
