import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

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
        return stockData.Item
    }
    catch (err) {
        console.log(err)
        return err
    }

}

module.exports = getStockValue;