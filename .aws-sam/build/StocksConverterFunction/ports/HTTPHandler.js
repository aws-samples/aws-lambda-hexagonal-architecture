const stock = require("../domains/StocksLogic");

const retrieveStock = async (stockID) => {
    try{
        const stockWithCurrencies = await stock.retrieveStockValues(stockID)
        return stockWithCurrencies;
    }
    catch(err){
        return err
    }
}

module.exports = {
    retrieveStock
}