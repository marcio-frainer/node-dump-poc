const sql = require('mssql');

//
// buscar as informações das colunas da tabela pertencentes ao schema SAJ
//
const QUERY_COLUMNS =
 `select o.name tableName,
         c.name columnName,
         ty.name typeName,
         c.is_nullable,
         c.max_length,
         c.precision
    from sys.columns c
    join sys.objects o on o.object_id = c.object_id and o.type = 'u' and o.schema_id = 9
    join sys.types ty on ty.system_type_id = c.system_type_id and ty.user_type_id = c.user_type_id
    where o.name = @tableName`;

  const Columns = async (configs, tableName) => {
      try {
        let pool = await sql.connect(configs);
        console.log(`tableName: ${tableName}`);
        let result = await pool.request()
            .input('tableName', sql.NVarChar, tableName)
            .query(QUERY_COLUMNS);
        console.log(`column result: ${result}`);
        return result;
      } catch (err) {
        return `error: ${err}`;
      }
  };

  module.exports = Columns;
