import express from 'express';
import { connection } from './config/bd';

const app = express();
app.use(express.json());

connection.query('SELECT NOW()', (err) => {
  if (err) console.log('Erro na conexão com o banco:', err);
  else console.log('Conectado ao PostgreSQL!');
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});