import fetch from "node-fetch";

const url = 'https://servicodados.ibge.gov.br/api/v1/paises';

async function getCountries() {
    const countriesList = []
    await fetch(url)
    .then(res => res.json())
    .then(countries => countriesList.push(...countries))
    .catch(err => console.log('error'));

    return countriesList;
}

export default getCountries;