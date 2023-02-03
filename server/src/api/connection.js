// import { config } from "dotenv";
// import mongoose from "mongoose";

// config();

// const CONNECTION = process.env.MONGO;

// function connection() {
//   mongoose.set('strictQuery', false);
//   mongoose.connect(CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true })
  
//   const db = mongoose.connection;
//   db.on("error", (error) => [console.log(error)])
//   db.once("open", () => console.log("Connected to the database!"))
// }

// export default connection;