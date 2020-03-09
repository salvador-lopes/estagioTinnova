const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('data.db');

const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS clientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    nome_completo VARCHAR(80) NOT NULL, 
    conta REAL NOT NULL, 
    saldo REAL NOT NULL,
    login VARCHAR(80) NOT NULL,
    password VARCHAR (12) NOT NULL
)
`;
const INSERT_ADMIN = `
       INSERT INTO CLIENTES (
        nome_completo,
        conta,
        saldo,
        login,
        password
) VALUES (
        'ADMIN',
        300,
        1500,
        'ADMIN',
        '1234')
`;
bd.serialize(() => {
    bd.run("PRAGMA foreign_keys=ON");
    
    bd.run(CLIENTES_SCHEMA);
    bd.run(INSERT_ADMIN);
    
    
    

    bd.each("SELECT * FROM clientes", (err, cliente) => {
        console.log('Cliente: ');
        console.log(cliente);
    });
});

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;