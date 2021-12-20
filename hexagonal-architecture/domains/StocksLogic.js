const Currency = require("../ports/CurrenciesService");
const Repository = require("../ports/Repository");

const CURRENCIES = ["USD", "CAD", "AUD"]

const retrieveStockValues = async (stockID) => {
    try{
        const stockValue = await Repository.getStockData(stockID);
        const currencyRates = await Currency.getCurrenciesData(CURRENCIES);

        const stockWithCurrencies = {
            stock: stockValue.stock,
            values: {
                "EUR": stockValue.value
            }
        };

        for(const currency in currencyRates){
            stockWithCurrencies.values[currency] =  (stockValue.value * currencyRates[currency]).toFixed(2)
        }

        return stockWithCurrencies;

    } catch(err) {
        return err;
    }
}

module.exports = {
    retrieveStockValues
}
