import express from 'express';
import cors from 'cors';
import routes from './routesnew2';

const app = express();


app.use(cors());

app.use(express.json());

app.use(routes);

//ROTA http://localhost:3333/users
//ROTA http://localhost:3333/contacts

// GET: Buscar ou listar uma info
// POST: Criar uma nova info
// PUT: Update de info existente
// DELETE: Deletar info existente


// Corpo da Req (Request Body): Dados para criacao ou update de um registro
// Route Params: Identificar um recurso na rota, update ou deletar
// Query Params: Qual pagina, listagem por paginacao, especificar uma pagna



// localhost:3333/users

app.listen(3333);