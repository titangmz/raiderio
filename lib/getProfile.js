const axios = require('axios')

async function getProfile(region , realm , name){

    const url = `https://raider.io/api/v1/characters/profile`
    const params = {
        region: region,
        realm: realm,
        name: name,
        // 
        fields:'gear,guild'
    }
    const {data} = await axios.get(url, {params} )

}

module.exports = getProfile