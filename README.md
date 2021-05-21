
Esta aplicação tem o objetivo de copiar a estrutura de uma base de dados relacional em SQLServer e
replicá-la em uma base de dados relacional PostGres.
Com isso, podemos dentro do ambiente do usuário, realizar operações com a base de dados sem sofrer
a influência de acesso de outros servidores de aplicação.

Serão utilizados as seguintes variáveis de ambiente

** Para o nome do usuário de acesso ao banco de dados
SP_DB_USERNAME_%alias_da_base_de_dados

** Para a senha de acesso ao banco de dados
SP_DB_PASSWORD_%alias_da_base_de_dados

** Para o nome do banco de dados
$NIMITZ_DB_NAME;

** Para a URL de conexão com o banco de dados
$NIMITZ_DB_URL;