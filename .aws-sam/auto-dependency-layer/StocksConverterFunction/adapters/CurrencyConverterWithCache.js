const axios = require("axios")
const redis = require("redis");

const REDIS_URL = process.env.CACHE_URL
const REDIS_PORT = process.env.CACHE_PORT
const CURRENCIES_BASE_PATH = process.env.CURRENCIES_PATH

const client = redis.createClient({
        url: `redis://${REDIS_URL}:${REDIS_PORT}`
});

client.on('error', (err) => console.log('Redis Cluster Error', err));

const getCurrencies = async () => {
    
    try{        
        
        if(!client.isOpen)
            await client.connect();

        let res = await client.get("CURRENCIES");

        if(res){
            return JSON.parse(res);
        }
        
        const getCurr = await axios.get(`${CURRENCIES_BASE_PATH}/currencies`)
        await client.set("CURRENCIES", JSON.stringify(getCurr.data), "ex", 20);
        
        return getCurr.data

    } catch(err) {
        return err; 
    }
}

module.exports = getCurrencies
