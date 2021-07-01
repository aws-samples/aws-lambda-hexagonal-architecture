const axios = require("axios")

const API_KEY = process.env.API_KEY

const getCurrencies = async (currencies) => {
    try{   
    // replace with  URL from the service   
        const res = await axios.get(`http://api.mysite.com?access_key=${API_KEY}&symbols=${currencies.toString()}`)
        return res.data
    } catch(err) {
        return err; 
    }
}

module.exports = getCurrencies;