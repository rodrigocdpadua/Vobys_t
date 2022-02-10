import pg from 'pg';

const client = new pg.Client({
    host: 'localhost',
    user: 'postgres',
    password: '123456',
    database: 'teste',
    port: 5432
});

async function createTables() {
    await client.connect();
    await client.query(
        `
        CREATE TABLE IF NOT EXISTS "projects" (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            description TEXT NOT NULL
        );
        
        CREATE TABLE IF NOT EXISTS "projectscountries" (
            id SERIAL PRIMARY KEY,
            id_project INTEGER,
            id_country INTEGER,
            FOREIGN KEY (id_project) REFERENCES projects (id)
        );
        `
    );
    client.end();
}

async function insertProjects(project) {
    await client.connect();
    await client.query(
        `
        INSERT INTO projects VALUES (
            DEFAULT,
            '${project.name}',
            '${project.description}'
        );
        `
    );
    client.end();
}