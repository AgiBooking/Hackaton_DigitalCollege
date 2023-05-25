//importando o express
const express = require('express');

//importando a conexao com o banco de dados que agora está isolada
const database = require('../../connection/databases');

//criando o app para adicionar as novas rotas/endpoints
const app = express.Router();


//criando uma rota do tipo GET para buscar todas as escolas
app.get('/empresa', async (req, res) => {
    let dados = await database.execute('SELECT * FROM tb_empresa');

    res.send(dados);
});

app.get('/empresa/:id', async (req, res) => {
    let dados = await database.execute(`
        SELECT * FROM tb_empresa WHERE id='${req.params.id}'
    `);

    res.send(dados[0]);
});

app.post('/empresa', async (req, res) => {
    let dados = req.body;

    let sql = await database.execute(`
    INSERT INTO tb_empresa (nome, cnpj, endereco_id, telefone, email)
    VALUES ('${req.body.nome}', '${req.body.cnpj}', '${req.body.endereco_id}','${req.body.telefone}','${req.body.email}');
    `);
    
    dados.id = sql.insertId;

    res.status(201).send(dados);
})

app.delete('/empresa/:id', async (req, res) => {
    await database.execute(`
        DELETE FROM tb_empresa WHERE id='${req.params.id}'
    `);

    res.sendStatus(204);
});

app.patch('/empresa/:id', async (req, res) => {
    let dados = req.body; 

    await database.execute(`
        UPDATE tb_empresa SET nome='${dados.nome}', cnpj='${dados.cnpj}', endereco_id='${dados.endereco_id}', telefone='${dados.telefone}' email='${dados.email}'
        WHERE id = '${req.params.id}'
    `);
    
    dados.id = parseInt(req.params.id);

    res.send(dados);
});

//exportando todas as rotas criadas nesse arquivo
module.exports = app;
