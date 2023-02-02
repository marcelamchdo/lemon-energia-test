import express from "express";
import bodyParser from "body-parser";
import middleware from "../utils/middleware.js";
import elegibility from "../controller/elegibility.js";

const app = express();
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("Hello World!");
});

app.post('/', middleware.inputValidation, elegibility)

app.listen(3000, () => {
  console.log("API rodando na porta 3000");
});