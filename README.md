# Vobys Teste
## Descrição
A aplicação é focada em banco de dados utilizando o PostgresSQL. Tem como objetivo criar tabelas de "subgrupos" de paises que fazem parte da ONU. Os dados dos paises foram obtidos da API: **https://servicodados.ibge.gov.br/api/docs/paises**.
## Dependencias
* NodeJS (16.13.1)
* npm (8.3.0)
## Baixando o Projeto
Com sua conta no GitHub, você pode fazer o fork do projeto.
Depois disso faça o clone do projeto em sua máquina com os seguintes comandos:
```shell
// Usando ssh
$ git clone git@github.com:rodrigocdpadua/Vobys_t.git

// Usando https
$ git clone https://github.com/rodrigocdpadua/Vobys_t.git
```
Entre no diretório do projeto:
```shell
$ cd Vobys_t
```
## Instalando pacotes
Rode o seguinte comando:
```shell
$ npm install
```
## Diagrama Entidade Relacionamento (DER)
Dentro do diretório possui um arquivo **der.html** onde contém os diagramas.
## Funções
### Create Table
Criar tabelas no banco de dados.
```javascript
import tables from './db/createtables.js';

await tables.createTables();
```
### Insert
Parâmetros: (nameSubGroup, codCountries).
- **nameSubGroup:** Nome do "subgroup" que vai ser criado.
- **codCountries:** Array com os códigos dos países a serem adicionados.
```javascript
import insert from './db/insert.js';

await insert.createSubGroup('Grupo 1', [20, 296, 408, 144]);
await insert.addCountriesToSubGroup('Grupo 0', [72]);
```
### Delete
Para deletar um "subgroup": (nameSubGroup).</br>
Para deletar um "country": (idCountry).</br>
Para deletar um "subgroupcountry": (nameSubGroup, idCountry).
- **nameSubGroup:** Nome do "subgroup".
- **idCountry:** Id do "country".
```javascript
import del from './db/delete.js';

await del.deleteSubGroup('Grupo 1');
```
### Update
Parâmetros: (nameSubGroup, property, newValue).
- **nameSubGroup:** Nome do "subgroup" que vai ser atualizado.
- **property:** Propriedade do "subgroup" que vai ser alterado, [name ou status].
- **newValue:** Novo valor para a propriedade.
```javascript
import update from './db/update.js';

await update.updateSubGroup('Grupo 1', 'name', 'Grupo Atualizado 1');
```
## Select
```javascript
import select from './db/select.js';

// SELECT todos os valores de uma tabela:
console.log(await select.selectAllSubGroups());
console.log(await select.selectAllCountries());
console.log(await select.selectAllSubGroupsCountries());

// SELECT um valor específico de uma tabela:
console.log(await select.selectSubGroup('Grupo 0'));
console.log(await select.selectCountry('76'));

// SELECT todos os "countries" que pertence a um "subgroup":
console.log(await select.selectCountriesInSubGroup('Grupo 6'));
console.log(await select.selectCountriesInSubGroup('Grupo 0'));

// SELECT todos os "subgroups" que um "country" pertence:
console.log(await select.selectSubGroupsOfCountry(108));
console.log(await select.selectSubGroupsOfCountry(4));
```
