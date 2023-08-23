const getCurrencies = require("../adapters/CurrencyConverter");
// const getCurrencies = require("../adapters/CurrencyConverterWithCache");

const getCurrenciesData = async (currencies) => {
    try{
        const data = await getCurrencies(currencies);
        return data
    } catch(err) {
        return err
    }
}

module.exports = {
    getCurrenciesData
}