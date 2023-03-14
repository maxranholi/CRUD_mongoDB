const mongoose = require("mongoose");

require("dotenv").config();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    `mongodb://mongo:GhpM2y1usjLqwWO0FryA@containers-us-west-28.railway.app:5633`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  console.log("Banco de dados conectado");
}

module.exports = main;
