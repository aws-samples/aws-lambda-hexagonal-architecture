const axios = require("axios")
const redis = require("redis");
const asyncRedis = require("async-redis");

const API_KEY = process.env.API_KEY
const REDIS_URL = process.env.CACHE_URL
const REDIS_PORT = process.env.CACHE_PORT

const client = redis.createClient({
    host: REDIS_URL,
    port: REDIS_PORT
});
const asyncClient = asyncRedis.decorate(client);

const getCurrencies = async (currencies) => {

    try{        
        let res = await asyncClient.get("CURRENCIES");

        if(res){
            return JSON.parse(res);
        }
        
        const getCurr = await axios.get(`http://api.mysite.com?access_key=${API_KEY}&symbols=${currencies.toString()}`)
        await asyncClient.set("CURRENCIES", JSON.stringify(getCurr.data), "ex", 20);
        
        return getCurr.data

    } catch(err) {
        return err; 
    }
}

module.exports = getCurrencies
