const mongoose = require("mongoose");

const Sorteio = mongoose.model("megasena", {
  nome: String,
  dezenas: [Number],
  numero_concurso: Number,
  data_concurso: String,
});

module.exports = Sorteio;
