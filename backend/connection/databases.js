const mysql2 = require('mysql2/promise');

async function execute(sql) {
    let conexao = await mysql2.createConnection({
        host: 'sql213.epizy.com',
        port: '3306',
        user: 'epiz_34264402',
        password: 'JOYgXsxenM',
        database: 'epiz_34264402_api_agi_booking'
    });

    //executa lá no mysql
    let [rows] = await conexao.execute(sql);

    return rows;
}

module.exports = {
    execute
};