const express = require('express');
const bodyParser = require('body-parser');

const authController = require('./src/controllers/authController');

const app = express();
const port = 3000;

app.use(bodyParser.json());


app.post('/signup', authController.signup);


app.post('/signin', authController.signin);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
