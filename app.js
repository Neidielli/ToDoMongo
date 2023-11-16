const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const tarefaController = require('./controller/tarefa');

const app = express();
const mustache = require('mustache');

app.set('view engine', 'mustache');
app.set('view options', {
  partials: 'view/tarefa'
});


app.use(bodyParser.json());
app.use(cors());

app.use('/tarefas', tarefaController);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log(`Servidor rodando na porta ${PORT}`);
});
