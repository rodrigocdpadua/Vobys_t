import clientC from './database.js';

async function updateSubGroup(nameSubGroup, property, newValue) {
    const client = await clientC();
    await client.connect();
    await client.query(
        `
        UPDATE subgroups SET ${property} = '${newValue}' WHERE name = '${nameSubGroup}';
        `
    ).catch(err => console.log('Propriedades erradas ou Grupo não existe.'));
    client.end();
}

export default {updateSubGroup};