const stock = require("../domains/StocksLogic");

const retrieveStock = async (stockID) => {
    try{
        const stockWithCurrencies = await stock.getStockWithCurrencies(stockID)
        return stockWithCurrencies;
    }
    catch(err){
        return err
    }
}

module.exports = {
    retrieveStock
}