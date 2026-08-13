import pg from 'pg';
const { Client } = pg;

// Configurações de conexão
// São as mesmas informações que você usa no pgAdmin!
const client = new Client({
    host:     'localhost',
    port:     5432,
    user:     'postgres',
    password: 'root',
    database: 'loja_db'
});

// Conectar ao banco
client.connect()
    .then(() => {
        console.log('✅ Conectado ao PostgreSQL!');
        client.end();
    })
    .catch(erro => {
        console.log('❌ Erro ao conectar:', erro.message);
    });