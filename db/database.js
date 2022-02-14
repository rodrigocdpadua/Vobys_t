import pg from 'pg';

async function clientC() {
    return new pg.Client({
        host: 'localhost',
        user: 'postgres',
        password: '123456',
        database: 'teste',
        port: 5432
    });
}

export default clientC;