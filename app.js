const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const tarefaController = require('./controller/tarefa');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/tarefas', tarefaController);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
