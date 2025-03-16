import express from 'express';
import { connection } from './config/bd';
import phoneRouter from './routers/phoneRouter';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
app.use(express.json());

app.use("/", phoneRouter);
app.use(errorHandler);

connection.query('SELECT NOW()', (err) => {
  if (err) console.log('Erro na conexão com o banco:', err);
  else console.log('Conectado ao PostgreSQL!');
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});