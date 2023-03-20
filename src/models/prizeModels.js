const mongoose = require("mongoose");

const Person = mongoose.model("person", {
  nome: String,
  idade: Number,
  cor_favorita: String,
  numeros_da_sorte: [Number],
});

module.exports = Person;
