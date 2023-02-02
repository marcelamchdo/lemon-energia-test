import express from "express";
import getAll from "../controller/clientValidation.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", getAll)

app.listen(3000, () => {
  console.log("API rodando na porta 3000");
});