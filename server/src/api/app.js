import express from "express";
import bodyParser from "body-parser";
import controller from "../controller/elegibility.js";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const CONNECTION = process.env.MONGO;
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

app.post('/', controller.elegibility)
app.get('/', controller.getAll)

mongoose.set('strictQuery', false)   
mongoose.connect(CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;
db.on("error", (error) => [console.log(error)])
db.once("open", () => console.log("Connected to the database!"))
 
app.listen(4000, () => {
  console.log(`API rodando na porta ${PORT}`);
});

export default app;