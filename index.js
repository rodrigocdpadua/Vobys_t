import tables from './db/createtables.js';
import insert from './db/insert.js';
import del from './db/delete.js';
import update from './db/update.js';
import select from './db/select.js';

// CREATE TABLES criar tabelas "subgroups" "countries" "subgroupscountries".
await tables.createTables();

// INSERTS para alimentar o banco de dados,
// Parâmetros: (nameSubGroup, codCountries).
// nameSubGroup: Nome do "subgroup" que vai ser criado.
// codCountries: Array com os códigos dos países a serem adicionados.
/*await insert.createSubGroup('Grupo 0', [20, 784, 4]);
await insert.createSubGroup('Grupo 1', [20, 296, 408, 144]);
await insert.createSubGroup('Grupo 2', [504, 674, 548]);
await insert.createSubGroup('Grupo 3', [51, 784]);
await insert.createSubGroup('Grupo 4', [8, 24, 32, 4, 40]);
await insert.createSubGroup('Grupo 5', [50, 51, 31]);
await insert.createSubGroup('Grupo 6', [20, 108, 50]);
await insert.createSubGroup('Grupo 7', [76, 784, 4]);
await insert.createSubGroup('Grupo 8', [548, 76, 108]);
await insert.createSubGroup('Grupo 9', [24, 51, 50]);*/

// INSERTS para adicionar mais paises em um grupo já existente.
// Parâmetros: (nameSubGroup, codCountries).
// nameSubGroup: Nome do "subgroup" para adicionar mais paises.
// codCountries: Array com os códigos dos países a serem adicionados.
/*await insert.addCountriesToSubGroup('Grupo 0', [72]);
await insert.addCountriesToSubGroup('Grupo 3', [112, 140]);*/

// UPDATE para atualizar o nome ou status de um "subgroup".
// Parâmetros: (nameSubGroup, property, newValue).
// nameSubGroup: Nome do "subgroup" que vai ser atualizado.
// property: Propriedade do "subgroup" que vai ser alterado, [name ou status].
// newValue: Novo valor para a propriedade.
/*await update.updateSubGroup('Grupo 1', 'name', 'Grupo Atualizado 1');
await update.updateSubGroup('Grupo 5', 'name', 'Grupo Atualizado 2');
await update.updateSubGroup('Grupo 9', 'status', 'false');
await update.updateSubGroup('Grupo 4', 'status', 'false');*/

// DELETE para deletar um "subgroup" "country" "subgroupcountry".
// Para deletar um "subgroup": (nameSubGroup).
// Para deletar um "country": (idCountry).
// Para deletar um "subgroupcountry": (nameSubGroup, idCountry).
// nameSubGroup: Nome do "subgroup".
// idCountry: Id do "country".
/*await del.deleteSubGroup('Grupo 2');
await del.deleteSubGroup('Grupo 7');
await del.deleteCountry(20);
await del.deleteCountry(144);
await del.deleteSubGroupCountry('Grupo 4', 4);
await del.deleteSubGroupCountry('Grupo 7', 784);*/

// SELECTS alguns selects programados, mas podem ser bem mais específicos.
// SELECT todos os valores de uma tabela:
/*console.log(await select.selectAllSubGroups());
console.log(await select.selectAllCountries());
console.log(await select.selectAllSubGroupsCountries());*/

// SELECT um valor específico de uma tabela:
/*console.log(await select.selectSubGroup('Grupo 0'));
console.log(await select.selectCountry('76'));*/

// SELECT todos os "countries" que pertence a um "subgroup":
/*console.log(await select.selectCountriesInSubGroup('Grupo 6'));
console.log(await select.selectCountriesInSubGroup('Grupo 0'));*/

// SELECT todos os "subgroups" que um "country" pertence:
/*console.log(await select.selectSubGroupsOfCountry(108));
console.log(await select.selectSubGroupsOfCountry(4));*/