const axios = require("axios")

const getCurrencies = async (currencies) => {
    try{   
        const getCurr = await axios.get(`${CURRENCIES_BASE_PATH}/currencies`)
        return getCurr.data
    } catch(err) {
        return err; 
    }
}

module.exports = getCurrencies;