const HTTPHandler = require("../ports/HTTPHandler")

const getStocksRequest = async(stockID) => {
    let res;

    try {   
        const stockData = await HTTPHandler.retrieveStock(stockID)
        
        res = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: stockData,
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return res;
} 

module.exports = getStocksRequest