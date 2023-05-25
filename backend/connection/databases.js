const mysql2 = require('mysql2/promise');

async function execute(sql) {
    let conexao = await mysql2.createConnection({
        host: '162.216.16.125',
        port: '3306',
        user: 'agibooking',
        password: 'strongpassword',
        database: 'agibooking'
    });

    //executa lá no mysql
    let [rows] = await conexao.execute(sql);

    return rows;
}

module.exports = {
    execute
};