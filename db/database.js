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
        CREATE TABLE IF NOT EXISTS "subgroups" (
            id SERIAL PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            status BOOLEAN DEFAULT TRUE,
            qnt_countries SMALLINT DEFAULT 0,
            creation_date DATE DEFAULT CURRENT_DATE
        );

        CREATE TABLE IF NOT EXISTS "countries" (
            id SMALLINT PRIMARY KEY NOT NULL UNIQUE,
            acronym VARCHAR(2) NOT NULL,
            name VARCHAR(50) NOT NULL,
            language VARCHAR(20) NOT NULL,
            capital VARCHAR(50) NOT NULL,
            coin VARCHAR(20) NOT NULL
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

async function insertSubGroup(group) {
    await client.connect();
    await client.query(
        `
        INSERT INTO subgroups (id, name) VALUES (
            DEFAULT,
            '${group.name}'
        );
        `
    );
    client.end();
}

async function insertCountry(country) {
    await client.connect();
    await client.query(
        `
        INSERT INTO countries VALUES (
            '${country.id}',
            '${country.acronym}',
            '${country.name}',
            '${country.lenguage}',
            '${country.capital}',
            '${country.coin}'
        );
        `
    );
    client.end();
}

async function insertSubGroupsCountries(idGroupCountry) {
    await client.connect();
    await client.query(
        `
        INSERT INTO groupscountries VALUES (
            DEFAULT,
            '${idGroupCountry.idSubGroup}',
            '${idGroupCountry.idCountry}'
        );
        `
    )
    client.end();
}

async function deleteSubGroup(idSubGroup) {
    await client.connect();
    await client.query(
        `
        DELETE FROM subgroups
            WHERE id = '${idSubGroup}'
        `
    );
    client.end();
}

async function deleteCountry(idCountry) {
    await client.connect();
    await client.query(
        `
        DELETE FROM countries
            WHERE id = '${idCountry}'
        `
    );
    client.end();
}

async function deleteSubGroupCountry(idGroupCountry) {
    await client.connect();
    await client.query(
        `
        DELETE FROM groupscountries
            WHERE id = '${idGroupCountry}'
        `
    );
    client.end();
}

//createTables();
//insertSubGroup({name: ''});
//const c = {id: , acronym: '', name: '', lenguage: '', capital: '', coin: ''};
//insertCountry(c);
//insertSubGroupsCountries({idSubGroup: , idCountry: });
//deleteSubGroupCountry();
//deleteCountry();
//deleteSubGroup();