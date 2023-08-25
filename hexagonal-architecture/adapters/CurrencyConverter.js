const axios = require("axios")

const CURRENCIES_BASE_PATH = process.env.CURRENCIES_PATH

const getCurrencies = async () => {
    try{   
        const getCurr = await axios.get(`${CURRENCIES_BASE_PATH}/currencies`)
        return getCurr.data
    } catch(err) {
        return err; 
    }
}

module.exports = getCurrencies;