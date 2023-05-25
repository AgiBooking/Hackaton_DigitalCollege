const express = require('express');
const cors = require('cors');
const empresasRouter = require('./resources/empresas/routes');
const enderecosRouter = require('./resources/enderecos/routes');
const eventosRouter = require('./resources/eventos/routes');
const salasRouter = require('./resources/salas/routes');
const tokenRouter = require('./resources/token/routes');
const usuariosRouter = require('./resources/usuarios/routes');



const app = express();

app.use(cors());
app.use(express.json());
app.use(empresasRouter);
app.use(enderecosRouter);
app.use(eventosRouter);
app.use(salasRouter);
app.use(tokenRouter);
app.use(usuariosRouter);


app.use((req, res) => {
    res.status(404).send("Nenhuma rota encontrada")
})

const PORTA = 8000;

app.listen(PORTA, () => {
    console.log('-----------');
    console.log('-- ATIVO --');
    console.log('-----------');
});