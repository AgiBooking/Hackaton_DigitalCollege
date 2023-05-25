//importando o express
const express = require('express');

//importando a conexao com o banco de dados que agora está isolada
const database = require('../../connection/databases');

//criando o app para adicionar as novas rotas/endpoints
const app = express.Router();


//criando uma rota do tipo GET para buscar todas as escolas
app.get('/usuario', async (req, res) => {
    let dados = await database.execute('SELECT * FROM tb_usuario');

    res.send(dados);
});

app.get('/usuario/:id', async (req, res) => {
    let dados = await database.execute(`
        SELECT * FROM tb_usuario WHERE id='${req.params.id}'
    `);

    res.send(dados[0]);
});

app.post('/usuario', async (req, res) => {
    let dados = req.body;

    let sql = await database.execute(`
    INSERT INTO tb_usuario (nome, sobrenome, email, senha, telefone, img_id, empresa_id)
    VALUES ('${req.body.nome}', '${''}','${req.body.email}','${"12345678"}', '${req.body.telefone}','${1}','${1}');
    `);
    
    dados.id = sql.insertId;

    res.status(201).send(dados);
})

app.delete('/usuario/:id', async (req, res) => {
    await database.execute(`
        DELETE FROM tb_usuario WHERE id='${req.params.id}'
    `);

    res.sendStatus(204);
});

app.patch('/usuario/:id', async (req, res) => {
    let dados = req.body; 

    await database.execute(`
        UPDATE tb_usuario SET nome='${dados.nome}', sobrenome='${dados.sobrenome}', email='${dados.email}', telefone='${dados.telefone}', img_id='${dados.img_id}', empresa_id='${dados.empresa_id}',
        WHERE id = '${req.params.id}'
    `);
    
    dados.id = parseInt(req.params.id);

    res.send(dados);
});

//exportando todas as rotas criadas nesse arquivo
module.exports = app;
