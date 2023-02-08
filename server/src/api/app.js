import express from "express";
import bodyParser from "body-parser";
import controller from "../controller/elegibility.js";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

// const MONGOURL = `mongodb://${ process.env.MONGOUSER }}:${ process.env.MONGOPASSWORD }@${ process.env.MONGOHOST }:${ process.env.MONGOPORT }`

const CONNECTION = process.env.MONGO;
const PORT = process.env.MONGOPORT || 7592;

app.use(bodyParser.json());
app.use(cors());

app.post('/', controller.elegibility)
app.get('/', controller.getAll)

mongoose.set('strictQuery', false)   
mongoose.connect(CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;
db.on("error", (error) => [console.log(error)])
db.once("open", () => console.log("Connected to the database!"))
 
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});

export default app;