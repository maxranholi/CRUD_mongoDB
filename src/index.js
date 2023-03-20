const express = require("express");
const app = express();
const prizeRouter = require("./routes/prizeRoutes");

require("dotenv").config();
require("./dataBase/dataBase");

const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/person", prizeRouter);

app.listen(port, () => {
  console.log(`Server rodando no http://localhost:${port}`);
});
