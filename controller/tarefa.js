const express = require('express');
const router = express.Router();
const tarefaModel = require('./tarefa.model');

//Insere nova tarefa
router.post('/', async (req, res) => {
  const tarefa = new tarefaModel({
    nome: req.body.nome,
    descricao: req.body.descricao,
    dificuldade: req.body.dificuldade
  });

  await tarefa.save();

  res.status(201).send(tarefa);
});

// Lista todas as tarefas ordenadas por nível de dificuldade
router.get('/', async (req, res) => {
  const tarefas = await tarefaModel.find().sort({ dificuldade: 1 });

  res.send(tarefas);
});

// Lista tarefas por id
router.get('/:id', async (req, res) => {
  const tarefa = await tarefaModel.findById(req.params.id);

  if (!tarefa) {
    res.status(404).send('Tarefa não encontrada');
    return;
  }

  res.send(tarefa);
});

// Edita tarefa
router.put('/:id', async (req, res) => {
  const tarefa = await tarefaModel.findById(req.params.id);

  if (!tarefa) {
    res.status(404).send('Tarefa não encontrada');
    return;
  }

  tarefa.nome = req.body.nome;
  tarefa.descricao = req.body.descricao;
  tarefa.dificuldade = req.body.dificuldade;

  await tarefa.save();

  res.send(tarefa);
});

//Exclui tarefa
router.delete('/:id', async (req, res) => {
  const tarefa = await tarefaModel.findById(req.params.id);

  if (!tarefa) {
    res.status(404).send('Tarefa não encontrada');
    return;
  }

  await tarefa.remove();

  res.sendStatus(204);
});

module.exports = router;
