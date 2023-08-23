const getStocksRequest = require("./adapters/GetStocksRequest");

exports.lambdaHandler = async (event) => {
    try{
        const stockID = event.pathParameters.StockID;
        const response = await getStocksRequest(stockID);
        return response
    } catch (err) {
        console.log(err)
        return err;
    }
};
