
# Copiar estrutura do MSSQL para Postgres

### Esta aplicação tem o objetivo de copiar a estrutura de uma base de dados relacional em SQLServer e replicá-la em uma base de dados relacional PostGres.

### Com isso, podemos dentro do ambiente do usuário, realizar operações com a base de dados sem sofrer a influência de acesso de outros servidores de aplicação.


## Serão utilizados as seguintes variáveis de ambiente para MSSQL

    ** Para o nome do usuário de acesso ao banco de dados
    MSSQL_USERNAME

    ** Para a senha de acesso ao banco de dados
    MSSQL_PASSWORD

    ** Para o nome do banco de dados
    MSSQL_DB_NAME

    ** Para a URL de conexão com o banco de dados
    MSSQL_DB_URL


## Serão utilizados as seguintes variáveis de ambiente para Postgres

    ** Para o nome do usuário de acesso ao banco de dados
    POSTGRES_USERNAME

    ** Para a senha de acesso ao banco de dados
    POSTGRES_PASSWORD

    ** Para o nome do banco de dados
    POSTGRES_DB_NAME

    ** Para a URL de conexão com o banco de dados
    POSTGRES_DB_URL