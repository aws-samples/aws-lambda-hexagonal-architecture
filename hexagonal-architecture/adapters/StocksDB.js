const AWS = require("aws-sdk");
AWS.config.update({
    region: "eu-west-1"
});
const documentClient = new AWS.DynamoDB.DocumentClient();

const DB_TABLE = process.env.DB_TABLE;

const getStockValue = async (stockID = "AMZN") => {
    let params = {
        TableName : DB_TABLE,
        Key:{
            'STOCK_ID': stockID
        }
    }

    try {
        const stockData = await documentClient.get(params).promise()
        return stockData
    }
    catch (err) {
        console.log(err)
        return err
    }
}

module.exports = getStockValue;