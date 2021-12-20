const getStockValue = require("../adapters/StocksDB");

const getStockData = async (stockID) => {
    try{
        const { stock, value } = await getStockValue(stockID);
        return { stock, value };
    } catch(err) {
        return err
    }
}

module.exports = {
    getStockData
}
