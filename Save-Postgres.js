const { Client } = require('pg');

//
// URI conexão para banco de dados relacional Postgres
//
const DB_POSTGRES_CONNECT = 'postgresql://postgres:1234567@localhost:5432/Pg5TINT';

//
// Instancia o client para conexão com o Postgres
//
const client = new Client({DB_POSTGRES_CONNECT});

client
  .connect()
  .then(err => {
    client.query(`SELECT * FROM "SAJ".t_teste`, (err, res) => {
        console.log(res.rows);
        client.end();
    });
  })
  .catch(err => console.log(`erro: ${err}`));

