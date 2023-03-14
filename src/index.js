const express = require("express");
const app = express();
const prizeRouter = require("./routes/prizeRoutes");

require("dotenv").config();
require("../dataBase");

const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/prize", prizeRouter);

app.listen(port, () => {
  console.log(`Server rodando no http://localhost:${port}`);
});

//megasena
//lotomania
//lotofacil
//quina
//timemania
//diadesorte