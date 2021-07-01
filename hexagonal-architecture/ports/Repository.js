const getStockValue = require("../adapters/StocksDB");

const getStockData = async (stockID) => {
    try{
        const data = await getStockValue(stockID);
        return data.Item;
    } catch(err) {
        return err
    }
}

module.exports = {
    getStockData
}