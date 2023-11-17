const tarefaModel = require('../model/tarefa');

const handleNotFound = (res) => res.status(404).send('Tarefa não encontrada');
const handleValidationError = (res, message) => res.status(400).send(message);

const criarTarefa = async (req, res, next) => {
  try {
    const { nome, descricao, dificuldade } = req.body;
    console.log(req.body)

    const tarefa = new tarefaModel({ nome, descricao, dificuldade });
    await tarefa.save();

    res.status(201).send(tarefa);
  } catch (error) {
    next(error);
  }
};

const listarTarefas = async (req, res) => {
  try {
    const tarefas = await tarefaModel.find().sort({ dificuldade: 1 });
    res.send(tarefas);
  } catch (error) {
    console.error('Erro ao buscar tarefas:', error);
    res.status(500).send('Erro interno do servidor');
  }
};

const listarTarefaPorId = async (req, res) => {
  try {
    const tarefa = await tarefaModel.findById(req.params.id);

    if (!tarefa) {
      return handleNotFound(res);
    }

    res.send(tarefa);
  } catch (error) {
    console.error('Erro ao buscar tarefa por ID:', error);
    res.status(500).send('Erro interno do servidor');
  }
};

const editarTarefa = async (req, res) => {
  try {
    const tarefa = await tarefaModel.findById(req.params.id);

    if (!tarefa) {
      return handleNotFound(res);
    }

    const { nome, descricao, dificuldade } = req.body;

    if (!nome || !descricao || !dificuldade) {
      return handleValidationError(res, 'Todos os campos são obrigatórios.');
    }

    tarefa.nome = nome;
    tarefa.descricao = descricao;
    tarefa.dificuldade = dificuldade;

    await tarefa.save();

    res.send(tarefa);
  } catch (error) {
    console.error('Erro ao editar tarefa:', error);
    res.status(500).send('Erro interno do servidor');
  }
};

const excluirTarefa = async (req, res) => {
  try {
    const tarefa = await tarefaModel.findById(req.params.id);

    if (!tarefa) {
      return handleNotFound(res);
    }

    await tarefa.deleteOne();

    res.sendStatus(204);
  } catch (error) {
    console.error('Erro ao excluir tarefa:', error);
    res.status(500).send('Erro interno do servidor');
  }
};

const handleValidationErrors = (err, req, res, next) => {
  if (err.message.includes('Todos os campos são obrigatórios.')) {
    return handleValidationError(res, 'Todos os campos são obrigatórios.');
  }
  next(err);
};

module.exports = {
  criarTarefa,
  listarTarefas,
  listarTarefaPorId,
  editarTarefa,
  excluirTarefa,
  handleValidationErrors, // Adicione este middleware
  handleNotFound, // Caso queira também usar o middleware para NotFound
};