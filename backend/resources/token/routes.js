//importando o express
const express = require('express');

//importando a conexao com o banco de dados que agora está isolada
const database = require('../../connection/databases');

//criando o app para adicionar as novas rotas/endpoints
const app = express.Router();


//criando uma rota do tipo GET para buscar todas as escolas
app.get('/token', async (req, res) => {
    let dados = await database.execute('SELECT * FROM tb_token');

    res.send(dados);
});

app.get('/token/:id', async (req, res) => {
    let dados = await database.execute(`
        SELECT * FROM tb_token WHERE id='${req.params.id}'
    `);

    res.send(dados[0]);
});

app.post('/token', async (req, res) => {
    let dados = req.body;

    let sql = await database.execute(`
    INSERT INTO tb_token (user_id, token)
    VALUES ('${req.body.user_id}', '${req.body.token}');
    `);
    
    dados.id = sql.insertId;

    res.status(201).send(dados);
})

app.delete('/token/:id', async (req, res) => {
    await database.execute(`
        DELETE FROM tb_token WHERE id='${req.params.id}'
    `);

    res.sendStatus(204);
});

app.patch('/token/:id', async (req, res) => {
    let dados = req.body; 

    await database.execute(`
        UPDATE tb_token SET user_id='${dados.user_id}', token='${dados.token}'
        WHERE id = '${req.params.id}'
    `);
    
    dados.id = parseInt(req.params.id);

    res.send(dados);
});

//exportando todas as rotas criadas nesse arquivo
module.exports = app;
