import clientC from './database.js';
import select from '../db/select.js';
import api from '../api/api_req.js';

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
    ).catch(err => console.log('Grupo já existe.'));
    client.end();
}

async function insertCountry(country) {
    const client = await clientC();
    await client.connect();
    await client.query(
        `
        INSERT INTO countries VALUES (
            ${country.id},
            '${country.acronym}',
            '${country.name}',
            '${country.language}',
            '${country.capital}',
            '${country.coin}'
        );
        `
    ).catch(err => console.log('País já existe'));
    client.end();
}

async function insertSubGroupCountry(idGroupCountry) {
    const client = await clientC();
    await client.connect();
    await client.query(
        `
        INSERT INTO subgroupscountries (id, id_subgroup, id_country) VALUES (
            DEFAULT,
            ${idGroupCountry.idSubGroup},
            ${idGroupCountry.idCountry}
        );
        `
    )
    client.end();
}

async function createSubGroup(nameSubGroup, codCountries) {
    await insertSubGroup(nameSubGroup);
    
    await addCountriesToSubGroup(nameSubGroup, codCountries);
}

async function addCountriesToSubGroup(nameSubGroup, codCountries) {
    const idSubGroup = await select.selectSubGroup(nameSubGroup);

    codCountries.map(async (codCountry) => {
        const apiCountry = await api.selectApiCountry(codCountry);
        await insertCountry(apiCountry);

        await insertSubGroupCountry({idSubGroup: idSubGroup[0].id, idCountry: codCountry})
        .catch(err => console.log('Grupo ou País não existem.'));
    });
}

export default {createSubGroup, addCountriesToSubGroup};