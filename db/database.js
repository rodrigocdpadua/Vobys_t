import pg from 'pg';

const client = new pg.Client({
    host: 'localhost',
    user: 'postgres',
    password: '123456',
    database: 'teste',
    port: 5432
});

async function createTables(){
    await client.connect();
    await client.query(
        `
        CREATE TABLE IF NOT EXISTS "projects" (
            "id" SERIAL,
            "name" VARCHAR(100) NOT NULL,
            "desc" TEXT NOT NULL,
            PRIMARY KEY ("id")
        );
        
        CREATE TABLE IF NOT EXISTS "projectscountries" (
            "id" SERIAL,
            "id_project" INTEGER,
            "id_country" INTEGER,
            PRIMARY KEY ("id"),
            FOREIGN KEY ("id_project") REFERENCES projects ("id")
        );
        `
    );
    client.end();
}