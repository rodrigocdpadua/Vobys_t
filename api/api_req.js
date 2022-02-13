import fetch from "node-fetch";

const url = 'https://servicodados.ibge.gov.br/api/v1/paises';

async function getCountries() {
    return (
        await fetch(url)
        .then(res => res.json())
        .then(countries => countries)
        .catch(err => console.log('Error'))
    );
}

export default getCountries;