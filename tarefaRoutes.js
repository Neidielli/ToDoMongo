const express = require('express');
const router = express.Router();
const tarefaController = require('./controller/tarefaController');

router.use(express.json());

router.post('/', tarefaController.criarTarefa);
router.get('/', tarefaController.listarTarefas);
router.get('/:id', tarefaController.listarTarefaPorId);
router.put('/:id', tarefaController.editarTarefa);
router.delete('/:id', tarefaController.excluirTarefa);

module.exports = router;