import fetch from "node-fetch";
import fs from 'fs';

const url = 'https://servicodados.ibge.gov.br/api/v1/paises';

async function getCountries() {
    return (
        await fetch(url)
        .then(res => res.json())
        .then(countries => countries)
        .catch(err => console.log('Error'))
    );
}

async function filterData() {
    const countries = await getCountries();
    const filtered = [];

    countries.map(country => filtered.push({
        id: country.id.M49,
        acronym: country.id['ISO-3166-1-ALPHA-2'],
        name: country.nome.abreviado,
        language: country.linguas[0].nome,
        capital: country.governo.capital.nome,
        coin: country['unidades-monetarias'][0].nome
    }));

    return filtered;
}

async function selectApiCountry(idCountry) {
    const countries = await filterData();

    return countries.find(country => country.id === idCountry);
}

async function jsonCountries() {
    const countries = await filterData();
    const json = JSON.stringify(countries);
    
    fs.writeFile('api/countries.json', json, 'utf8', (res) => res)
}

export default {filterData, selectApiCountry};