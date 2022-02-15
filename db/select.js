import clientC from './database.js';

async function selectAllSubGroups() {
    const client = await clientC();
    await client.connect();
    const res = await client.query(
        `
        SELECT * FROM subgroups;
        `
    );
    client.end();
    return res.rows;
}

async function selectAllCountries() {
    const client = await clientC();
    await client.connect();
    const res = await client.query(
        `
        SELECT * FROM countries;
        `
    );
    client.end();

    return res.rows;
}

async function selectAllSubGroupsCountries() {
    const client = await clientC();
    await client.connect();
    const res = await client.query(
        `
        SELECT * FROM subgroupscountries;
        `
    );
    client.end();
    return res.rows;
}

async function selectSubGroup(nameSubGroup) {
    const client = await clientC();
    await client.connect();
    const res = await client.query(
        `
        SELECT * FROM subgroups WHERE name = '${nameSubGroup}';
        `
    );
    client.end();
    return res.rows;
}

async function selectCountry(idCountry) {
    const client = await clientC();
    await client.connect();
    const res = await client.query(
        `
        SELECT * FROM countries WHERE id = '${idCountry}';
        `
    );
    client.end();
    return res.rows;
}

async function selectCountriesInSubGroup(nameSubGroup) {
    const idSubGroup = await selectSubGroup(nameSubGroup);

    const client = await clientC();
    await client.connect();
    const res = await client.query(
        `
        SELECT id_country, acronym, name, language, capital, coin FROM subgroupscountries
        INNER JOIN countries ON countries.id = subgroupscountries.id_country
        WHERE id_subgroup = ${idSubGroup[0].id};
        `
    );
    client.end();
    return res.rows;
}

async function selectSubGroupsOfCountry(idCountry){
    const client = await clientC();
    await client.connect();
    const res = await client.query(
        `
        SELECT id_subgroup, name, status, creation_date FROM subgroupscountries
        INNER JOIN subgroups ON subgroups.id = subgroupscountries.id_subgroup
        WHERE id_country = ${idCountry};
        `
    );
    client.end();
    return res.rows;
}

export default {selectAllSubGroups, selectSubGroup, selectAllCountries, selectCountry,  selectAllSubGroupsCountries, selectCountriesInSubGroup, selectSubGroupsOfCountry};