const  { DynamoDBClient } = require( "@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, GetCommand } = require("@aws-sdk/lib-dynamodb");

const DB_TABLE = process.env.DB_TABLE;

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const getStockValue = async (stockID = "AMZN") => {

    let params = {
        TableName : DB_TABLE,
        Key:{
            'STOCK_ID': stockID
        }
    }

    const command = new GetCommand(params);

    try {
        const stockData = await docClient.send(command);
        return {
            id: stockData.Item.STOCK_ID,
            value: stockData.Item.VALUE
        }
    }
    catch (err) {
        console.log(err)
        return err
    }

}

module.exports = getStockValue;