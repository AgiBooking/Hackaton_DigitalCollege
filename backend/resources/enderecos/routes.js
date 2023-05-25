//importando o express
const express = require('express');

//importando a conexao com o banco de dados que agora está isolada
const database = require('../../connection/databases');

//criando o app para adicionar as novas rotas/endpoints
const app = express.Router();


//criando uma rota do tipo GET para buscar todas as escolas
app.get('/enderecos', async (req, res) => {
    let dados = await database.execute('SELECT * FROM tb_endereco');

    res.send(dados);
});

app.get('/enderecos/:id', async (req, res) => {
    let dados = await database.execute(`
        SELECT * FROM tb_endereco WHERE id='${req.params.id}'
    `);

    res.send(dados[0]);
});

app.post('/enderecos', async (req, res) => {
    let dados = req.body;

    let sql = await database.execute(`
    INSERT INTO tb_endereco (rua, numero, cidade, estado, pais, cep)
    VALUES ('${req.body.rua}', '${req.body.numero}', '${req.body.cidade}','${req.body.estado}','${req.body.pais}','${req.body.cep}');
    `);
    
    dados.id = sql.insertId;

    res.status(201).send(dados);
})

app.delete('/enderecos/:id', async (req, res) => {
    await database.execute(`
        DELETE FROM tb_endereco WHERE id='${req.params.id}'
    `);

    res.sendStatus(204);
});

app.patch('/enderecos/:id', async (req, res) => {
    let dados = req.body; 

    await database.execute(`
        UPDATE tb_endereco SET rua='${dados.rua}', numero='${dados.numero}', cidade='${dados.cidade}', estado='${dados.estado}' pais='${dados.pais}', cep='${dados.cep}'
        WHERE id = '${req.params.id}'
    `);
    
    dados.id = parseInt(req.params.id);

    res.send(dados);
});

//exportando todas as rotas criadas nesse arquivo
module.exports = app;
