require('dotenv').config();

const app = require('./app');

const PORT = process.env.PORT || 3002;

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});