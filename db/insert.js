import clientC from './database.js';

async function insertSubGroup(name) {
    const client = await clientC();
    await client.connect();
    await client.query(
        `
        INSERT INTO subgroups (id, name) VALUES (
            DEFAULT,
            '${name}'
        );
        `
    );
    client.end();
}

async function insertCountry(country) {
    const client = await clientC();
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
    const client = await clientC();
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

export default {insertSubGroup, insertCountry, insertSubGroupsCountries};