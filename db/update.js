import clientC from './database.js';

async function updateSubGroup(idSubGroup, type, newValue) {
    const client = await clientC();
    await client.connect();
    await client.query(
        `
        UPDATE subgroups SET ${type} = '${newValue}' WHERE id = '${idSubGroup}';
        `
    );
    client.end();
}

export default updateSubGroup;