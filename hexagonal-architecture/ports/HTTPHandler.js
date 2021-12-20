const stock = require("../domains/StocksLogic");

const retrieveStock = async (stockID) => {
    try{
        const { stock, values } = await stock.retrieveStockValues(stockID)
        return { stock, values };
    }
    catch(err){
        return err
    }
}

module.exports = {
    retrieveStock
}
