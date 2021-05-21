
const Tables = require('./Load-Tables');
const Columns = require('./Load-Columns');

//
// Usuário de acesso ao banco de dados
//
const DB_USERNAME = process.env.SP_DB_USERNAME_PG5TINT2;

//
// Senha de acesso ao banco de dados
//
const DB_PASSWORD = process.env.SP_DB_PASSWORD_PG5TINT2;

//
// Nome do banco de dados
//
const DB_NAME = process.env.$NIMITZ_DB_NAME;

//
// Url do banco de dados
//
const DB_URL = process.env.$NIMITZ_DB_URL;

//
// configuração de um modelo de banco de dados
//
const SQL_CONFIG = {
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  server: DB_URL,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
};

//
// Após receber as tabelas do sistema temos que pegar a estrutura dessas tabelas e replicar
// na base do postgres
// tipos de objetos utilizado no sqlserver (objects)
// F - Foreign key, Pk - Primary key
//

Tables(SQL_CONFIG).then( result => {
  result.recordset.forEach(table => {
    Columns(SQL_CONFIG, table.name).then( element => {
      console.log(JSON.stringify(element));
    });
  })
  // console.log(JSON.stringify(result.recordset))
});


