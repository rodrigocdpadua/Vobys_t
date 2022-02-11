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
            FOREIGN KEY (id_project) REFERENCES projects (id) ON DELETE CASCADE
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

async function insertProjectCountry(idProjectCountry) {
    await client.connect();
    await client.query(
        `
        INSERT INTO projectscountries VALUES (
            DEFAULT,
            '${idProjectCountry.idProject}',
            '${idProjectCountry.idCountry}'
        );
        `
    )
    client.end();
}

async function deleteProject(idProject) {
    await client.connect();
    await client.query(
        `
        DELETE FROM projects
            WHERE id = '${idProject}'
        `
    );
    client.end();
}

async function deleteProjectCountry(idProjectCountry) {
    await client.connect();
    await client.query(
        `
        DELETE FROM projectscountries
            WHERE id_project = '${idProjectCountry.idProject}' AND id_country = '${idProjectCountry.idCountry}'
        `
    );
    client.end();
}