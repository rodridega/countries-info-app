const getCountries = async (req, res) => {

    try {
        // Get countries
        const countries = await fetch('https://date.nager.at/api/v3/AvailableCountries',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(response => response.json());

        res.status(200).json(countries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getCountryInfo = async (req, res) => {

    try {
        const { country } = req.params;

        // Get country info
        const countryInfo = await fetch(`https://date.nager.at/api/v3/CountryInfo/${country}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(response => response.json());

        // Get countries population
        const population = await fetch(`https://countriesnow.space/api/v0.1/countries/population`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(response => response.json());
        // Filter the population data to get the population of the country
        countryPopulation = population.data.filter((item) => item.country === countryInfo.commonName);

        // Get countries flags
        const flags = await fetch(`https://countriesnow.space/api/v0.1/countries/flag/images`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(response => response.json());
        // Filter the flags data to get the flag of the country
        countryFlag = flags.data.filter((item) => item.name === countryInfo.commonName).map((item) => item.flag);


        res.status(200).json({
            countryInfo,
            countryPopulation,
            countryFlag
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }

}

module.exports = {
    getCountries,
    getCountryInfo
}
