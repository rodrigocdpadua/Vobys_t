import clientC from './database.js';

async function deleteSubGroup(idSubGroup) {
    const client = await clientC();
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
    const client = await clientC();
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
    const client = await clientC();
    await client.connect();
    await client.query(
        `
        DELETE FROM groupscountries
            WHERE id = '${idGroupCountry}'
        `
    );
    client.end();
}

export default {deleteSubGroup, deleteCountry, deleteSubGroupCountry};