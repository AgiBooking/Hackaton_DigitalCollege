//importando o express
const express = require('express');

//importando a conexao com o banco de dados que agora está isolada
const database = require('../../connection/databases');

//criando o app para adicionar as novas rotas/endpoints
const app = express.Router();


//criando uma rota do tipo GET para buscar todas as escolas
app.get('/evento', async (req, res) => {
    let dados = await database.execute('SELECT * FROM tb_evento');

    res.send(dados);
});

app.get('/evento/:id', async (req, res) => {
    let dados = await database.execute(`
        SELECT * FROM tb_evento WHERE id='${req.params.id}'
    `);

    res.send(dados[0]);
});

app.post('/evento', async (req, res) => {
    let dados = req.body;

    let sql = await database.execute(`
    INSERT INTO tb_evento (usuario_id, sala_id, token, data_inicio, data_fim, hora_inicio, hora_fim, quant_participantes, acessibilidade)
    VALUES ('${req.body.usuario_id}', '${req.body.sala_id}', '${req.body.token}','${req.body.data_inicio}','${req.body.data_fim}', '${req.body.hora_inicio}','${req.body.hora_fim}','${req.body.quant_participantes}','${req.body.acessibilidade}');
    `);
    
    dados.id = sql.insertId;

    res.status(201).send(dados);
})

app.delete('/evento/:id', async (req, res) => {
    await database.execute(`
        DELETE FROM tb_evento WHERE id='${req.params.id}'
    `);

    res.sendStatus(204);
});

app.patch('/evento/:id', async (req, res) => {
    let dados = req.body; 

    await database.execute(`
        UPDATE tb_evento SET usuario_id='${dados.usuario_id}', sala_id='${dados.sala_id}', token='${dados.token}', data_inicio='${dados.data_inicio}', data_fim='${dados.data_fim}', hora_inicio='${dados.hora_inicio}', hora_fim='${dados.hora_fim}', quant_participantes='${dados.quant_participantes}', acessibilidade='${dados.acessibilidade}'
        WHERE id = '${req.params.id}'
    `);
    
    dados.id = parseInt(req.params.id);

    res.send(dados);
});

//exportando todas as rotas criadas nesse arquivo
module.exports = app;
