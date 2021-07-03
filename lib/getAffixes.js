const axios = require('axios')

async function getAffixes(region,locale){

    const url = `https://raider.io/api/v1/mythic-plus/affixes?region=eu&locale=en`
    const {data} = await axios.get(url)
    return data

}

module.exports = getAffixes