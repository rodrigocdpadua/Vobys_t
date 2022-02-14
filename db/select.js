import clientC from './database.js';

async function selectSubGroups() {
    const client = await clientC();
    await client.connect();
    const res = await client.query(
        `
        SELECT * FROM subgroups;
        `
    );
    console.log(res.rows);
    client.end();
}

async function selectCountries() {
    const client = await clientC();
    await client.connect();
    const res = await client.query(
        `
        SELECT * FROM countries;
        `
    );
    console.log(res.rows);
    client.end();
}

async function selectSubGroupsCountries() {
    const client = await clientC();
    await client.connect();
    const res = await client.query(
        `
        SELECT * FROM subgroupscountries;
        `
    );
    console.log(res.rows);
    client.end();
}