import express from "express";
import bodyParser from "body-parser";
import middleware from "../utils/middleware.js";
import controller from "../controller/elegibility.js";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import validationClient from "../services/clientValidation.js";

const app = express();
dotenv.config();

const CONNECTION = process.env.MONGO;
const PORT = process.env.PORT;



app.use(bodyParser.json());
app.use(cors());
// app.use(bodyParser.json({limit: "30mb", entended: true}))
// app.use(bodyParser.urlencoded({limit: "30mb", entended: true}))

app.post('/', controller.elegibility)
app.get('/', controller.getAll)

mongoose.set('strictQuery', false)   
mongoose.connect(CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;
db.on("error", (error) => [console.log(error)])
db.once("open", () => console.log("Connected to the database!"))
    // .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    // .catch((e) => console.log(e.message))
 
app.listen(4000, () => {
  console.log(`API rodando na porta ${PORT}`);
});