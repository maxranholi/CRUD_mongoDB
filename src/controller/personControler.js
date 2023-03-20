const Person = require("../models/prizeModels");

exports.create = async (req, res) => {
  const { nome, idade, cor_favorita, numeros_da_sorte } = req.body;

  const person = { nome, idade, cor_favorita, numeros_da_sorte };

  if (!nome || !idade || !cor_favorita || !numeros_da_sorte) {
    res.status(422).json({message: "Por favor, preencha todos os campos."})
  } else {
    try {
      await Person.create(person);
      res.status(201).json({ message: `Usuário ${nome} inserido com sucesso` });
      console.log(person);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};

exports.findAll = async (req, res) => {
  try {
    const people = await Person.find();
    res.status(200).json(people);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar resultados." });
  }
};

exports.findUser = async (req, res) => {
  const id = req.params.id;

  try {
    const person = await Person.findOne({ _id: id });

    if (!person) {
      res.status(422).json({ message: "Usuário não encontrado." });
      return;
    }

    res.status(200).json(person);
  } catch {
    res.status(500).json({ message: "Usuário não encontrado." });
  }
};

exports.updatUser = async (req, res) => {
  const id = req.params.id;

  const { nome, idade, cor_favorita, numeros_da_sorte } = req.body;

  const person = { nome, idade, cor_favorita, numeros_da_sorte };

  try {
    const updateUser = await Person.updateOne({ _id: id }, person);

    if (updateUser.matchedCount === 0) {
      res.status(422).json({ message: "Usuário não encontrado" });
    }

    res.status(200).json({ message: `Usuário alterado com sucesso.` });
  } catch (error) {
    res.status(500).json({ message: "Usuário não encontrado." });
  }
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;

  const person = await Person.findOne({ _id: id });

  if (!person) {
    res.status(422).json({message: "Usuário não encontrado."})
    return
  }

  try {
    await Person.deleteOne({ _id: id });
    res.status(200).json({ message: "Usuário deletado com sucesso." });
  } catch (error) {
    res.status(500).json({ message: "Usuário não encontrado." });
  }
};
