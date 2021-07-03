const axios = require('axios')

async function getProfile(region , realm , name){

    const url = `https://raider.io/api/v1/characters/profile`
    const params = {
        region: region,
        realm: realm,
        name: name,
        // 
        fields:'gear,guild,covenant,raid_progression,mythic_plus_ranks,mythic_plus_highest_level_runs'
    }
    const {data} = await axios.get(url, {params} )
    return data

}

module.exports = getProfile