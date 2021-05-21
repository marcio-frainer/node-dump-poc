const sql = require('mssql');

//
// buscar as informa��es das tabelas de usu�rio pertencentes ao schema SAJ
//
const QUERY_OBJECTS = 'select top 10 o.name from sys.objects o where o.type = \'u\' and o.schema_id = 9';

const Tables = async (configs) => {
    try {
      await sql.connect(configs);
      return await sql.query(QUERY_OBJECTS);
    } catch (err) {
      return err;
    }
};

module.exports = Tables;
