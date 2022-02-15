import clientC from './database.js';
import select from '../db/select.js';

async function deleteSubGroup(nameSubGroup) {
    const client = await clientC();
    await client.connect();
    await client.query(
        `
        DELETE FROM subgroups
            WHERE name = '${nameSubGroup}'
        `
    ).catch(err => console.log('Nome do grupo errado ou não existe.'));
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
    ).catch(err => console.log('id do país errado ou não existe.'));
    client.end();
}

async function deleteSubGroupCountry(nameSubGroup, idCountry) {
    const idSubGroup = await select.selectSubGroup(nameSubGroup);

    if(idSubGroup.length !== 0) {
        const client = await clientC();
        await client.connect();
        await client.query(
            `
            DELETE FROM subgroupscountries
                WHERE id_subgroup = ${idSubGroup[0].id} AND id_country = ${idCountry}
            `
        );
        client.end();
    } else {
        console.log('Grupo não existe.')
    }
}

export default {deleteSubGroup, deleteCountry, deleteSubGroupCountry};