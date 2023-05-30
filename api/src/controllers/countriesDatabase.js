const axios = require('axios')
const { Country } = require('../db.js');
const dataCountriesJson = require('../countries.json')
require('dotenv').config();

const countriesDatabase = async (req, res) => {
    try {
        // const response = await axios.get(dataCountriesJson)
        const data = dataCountriesJson.map(country => {
            let capital = country.capital;
            if (typeof capital === 'string') {
                capital = [capital];
            }
            return {
                id: country.cca3,
                name: country.name.common,
                flag: country.flags[1],
                capital: capital,
                continent: country.region,
                subregion: country.subregion,
                area: country.area,
                population: country.population,
            }
        });
        const bdd = await Country.bulkCreate(data)
        res.status(200).send(bdd)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
module.exports = countriesDatabase