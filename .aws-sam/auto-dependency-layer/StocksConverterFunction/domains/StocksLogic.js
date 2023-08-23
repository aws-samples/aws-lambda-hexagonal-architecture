const Currency = require("../ports/CurrenciesService");
const Repository = require("../ports/Repository");

const getStockWithCurrencies = async (stockID) => {
    try{
        const stock = await Repository.getStockData(stockID);
        const currencyList = await Currency.getCurrenciesData();

        const stockWithCurrencies = {
            stock: stock.id,
            values: {
                "USD": stock.value
            }
        };

        for(const currency in currencyList.rates){
            stockWithCurrencies.values[currency] =  (stock.value * currencyList.rates[currency]).toFixed(2)
        }

        return stockWithCurrencies;

    } catch(err) {
        return err;
    }
}

module.exports = {
    getStockWithCurrencies
};