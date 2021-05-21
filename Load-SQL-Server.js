const sql = require('mssql');

//
// buscar as informações das tabelas de usuário pertencentes ao schema SAJ
//
const QUERY_OBJECTS = 'select top 10 o.name from sys.objects o where o.type = \'u\' and o.schema_id = 9';

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
// Método para buscar
//
async function connect() {
  try {
    await sql.connect(SQL_CONFIG);
    return await sql.query(QUERY_OBJECTS);
  } catch (err) {
    console.log(`Connect failed: ${err}`)
  }
};

const tables = connect();


