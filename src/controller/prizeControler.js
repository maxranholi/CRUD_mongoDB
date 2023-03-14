const Sorteio = require("../models/prizeModels");

exports.create = async (req, res) => {
  try {
    const { nome, dezenas, numero_concurso, data_concurso } = req.body;

    const prize = { nome, dezenas, numero_concurso, data_concurso };

    await Sorteio.create(prize);
    res.status(201).json({ message: "sorteio inserido com sucesso" });
    console.log(prize);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.findAll = async (req, res) => {
  try {
    const prizes = await Sorteio.find()
    res.json(prizes)
  } catch (error) {
    res.status(500).json({message: "Erro ao buscar resultados."})
  }
}
