const Currency = require("../ports/CurrenciesService");
const Repository = require("../ports/Repository");

const CURRENCIES = ["USD", "CAD", "AUD"]

const retrieveStockValues = async (stockID) => {
    try{
        const stockValue = await Repository.getStockData(stockID);
        const currencyList = await Currency.getCurrenciesData(CURRENCIES);
    
        const stockWithCurrencies = {
            stock: stockValue.STOCK_ID,
            values: {
                "EUR": stockValue.VALUE
            }
        };
        
        for(const currency in currencyList.rates){
            stockWithCurrencies.values[currency] =  (stockValue.VALUE * currencyList.rates[currency]).toFixed(2)
        }

        return stockWithCurrencies;

    } catch(err) {
        return err;
    }
}

module.exports = {
    retrieveStockValues
}