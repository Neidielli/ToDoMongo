# ✅ ToDoMongo

O ToDoMongo é uma aplicação de lista de tarefas que permite aos usuários criar, atualizar, listar todas e uma e excluir tarefas. Esta aplicação é construída usando Node.js, Express.js e MongoDB para armazenar e gerenciar as tarefas. É uma ferramenta simples e eficaz para ajudá-lo a manter o controle das suas tarefas diárias.

## 🖥️ Tecnologias & Ferramentas:

- Linguagem de Programação: JavaScript
- Node.js: Plataforma de tempo de execução JavaScript
- Express.js: Framework para construir aplicativos da web
- MongoDB: Sistema de gerenciamento de banco de dados relacional

## ⚙️ Execução:

Para executar o aplicativo localmente, siga estas etapas:

1. Clone o repositório para o seu ambiente de desenvolvimento:

```bash
git clone https://github.com/Neidielli/ToDoMongo
cd ToDoMongo
```

2. Instale as dependências usando o npm (Node Package Manager):

```bash
npm install
```

3. Configure o banco de dados Mongo:
   - Certifique-se de ter o MongoDB instalado e o serviço do MongoDB em execução.
   - Inicialize o servidor do Mongo.

4. Inicie o servidor:

```bash
npm start
```

5. Após iniciar o servidor, você pode usar o Postman (ou outra ferramenta de sua preferência) para testar as rotas da aplicação.
   
   Nova tarefa (POST): URL: http://127.0.0.1:3000/tarefas
   
   Atualizar (PUT): URL: http://127.0.0.1:3000/tarefas/:id
   
   Listar Todas (GET): URL: http://127.0.0.1:3000/tarefas

   Listar por ID (GET): URL: http://127.0.0.1:3000/tarefas/:id
   
   Deletar por ID (DELETE): URL: http://127.0.0.1:3000/tarefas/:id
