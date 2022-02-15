import clientC from './database.js';

async function createTables() {
    const client = await clientC();
    await client.connect();
    await client.query(
        `
        CREATE TABLE IF NOT EXISTS "subgroups" (
            id SERIAL PRIMARY KEY,
            name VARCHAR(50) NOT NULL UNIQUE,
            status BOOLEAN DEFAULT TRUE,
            creation_date DATE DEFAULT CURRENT_DATE
        );

        CREATE TABLE IF NOT EXISTS "countries" (
            id SMALLINT PRIMARY KEY NOT NULL UNIQUE,
            acronym VARCHAR(2) NOT NULL,
            name VARCHAR(50) NOT NULL,
            language VARCHAR(20) NOT NULL,
            capital VARCHAR(50) NOT NULL,
            coin VARCHAR(50) NOT NULL
        );
        
        CREATE TABLE IF NOT EXISTS "subgroupscountries" (
            id SERIAL PRIMARY KEY,
            id_subgroup INTEGER,
            id_country SMALLINT,
            FOREIGN KEY (id_subgroup) REFERENCES subgroups (id) ON DELETE CASCADE,
            FOREIGN KEY (id_country) REFERENCES countries (id) ON DELETE CASCADE
        );
        `
    );
    client.end();
}

export default {createTables};