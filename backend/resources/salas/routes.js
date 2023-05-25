//importando o express
const express = require('express');

//importando a conexao com o banco de dados que agora está isolada
const database = require('../../connection/databases');

//criando o app para adicionar as novas rotas/endpoints
const app = express.Router();


//criando uma rota do tipo GET para buscar todas as escolas
app.get('/salas', async (req, res) => {
    let dados = await database.execute('SELECT * FROM tb_salas');

    res.send(dados);
});

app.get('/salas/:id', async (req, res) => {
    let dados = await database.execute(`
        SELECT * FROM tb_salas WHERE id='${req.params.id}'
    `);

    res.send(dados[0]);
});

app.post('/salas', async (req, res) => {
    let dados = req.body;

    let sql = await database.execute(`
    INSERT INTO tb_salas (nome, capacidade, localizacao, telefone, empresa_id)
    VALUES ('${req.body.nome}', '${req.body.capacidade}', '${req.body.localizacao}','${req.body.telefone}','${req.body.empresa_id}');
    `);
    
    dados.id = sql.insertId;

    res.status(201).send(dados);
})

app.delete('/salas/:id', async (req, res) => {
    await database.execute(`
        DELETE FROM tb_salas WHERE id='${req.params.id}'
    `);

    res.sendStatus(204);
});

app.patch('/salas/:id', async (req, res) => {
    let dados = req.body; 

    await database.execute(`
        UPDATE tb_salas SET nome='${dados.nome}', capacidade='${dados.capacidade}', localizacao='${dados.localizacao}', telefone='${dados.telefone}' empresa_id='${dados.empresa_id}'
        WHERE id = '${req.params.id}'
    `);
    
    dados.id = parseInt(req.params.id);

    res.send(dados);
});

//exportando todas as rotas criadas nesse arquivo
module.exports = app;
