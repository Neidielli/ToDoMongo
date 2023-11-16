const mongoose = require('mongoose');

const tarefaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  dificuldade: {
    type: Number,
    required: true
  }
});

mongoose.connect('mongodb://localhost:27017/tarefas');

module.exports = mongoose.model('Tarefa', tarefaSchema);
