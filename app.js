const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const tarefaRoutes = require('./tarefaRoutes'); // Importe as rotas

dotenv.config();
const app = express();

app.set('view engine', 'mustache');
app.set('view options', {
  partials: 'view/tarefa'
});

app.use(bodyParser.json());
console.log(bodyParser.json())
app.use(cors());

app.use('/tarefas', tarefaRoutes);

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

app.listen(PORT, async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log(`Servidor rodando na porta ${PORT}`);
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
});
