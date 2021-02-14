const { validationResult } = require('express-validator');
const repository = require('../repositories/developers-repository');

// list
exports.listDevelopers = async (req, res) => {
  try {
    const data = await repository.listDevelopers();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar os desenvolvedores.'});
  }
};

// get
exports.getDeveloper = async (req, res) => {
  try {
    const data = await repository.getDeveloper(req.params.id);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar o desenvolvedore.'});
  }
};

// create
exports.createDeveloper = async (req, res) => {
  const {errors} = validationResult(req);

  if(errors.length > 0) {
    return res.status(400).send({message: errors})
  }

  try {
    await repository.createDeveloper({
      nome: req.body.nome,
      sexo: req.body.sexo,
      idade: req.body.idade,
      hobby: req.body.hobby,
      datanascimento: new Date( req.body.datanascimento )
    });
    return res.status(201).send({message: 'Desenvolvedor cadastrado com sucesso!'});
  } catch (e) {
    return res.status(500).send({message: 'Falha ao cadastrar o desenvolvedor.'});
  }
};

// update
exports.updateDeveloper = async (req, res) => {
  const {errors} = validationResult(req);

  if(errors.length > 0) {
    return res.status(400).send({message: errors})
  }

  try {
    await repository.updateDeveloper(req.params.id, req.body);
    res.status(200).send({
      message: 'Desenvolvedor atualizado com sucesso!'
    });
  } catch (e) {
    res.status(500).send({message: 'Falha ao atualizar o desenvolvedor.'});
  }
};

// delete
exports.deleteDeveloper = async (req, res) => {
  try {
    await repository.deleteDeveloper(req.params.id);
    res.status(200).send({
      message: 'Desenvolvedor removido com sucesso!'
    });
  } catch (e) {
    res.status(500).send({message: 'Falha ao remover o desenvolvedor.'});
  }
};