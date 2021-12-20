const getCurrencies = require("../adapters/CurrencyConverter");
// const getCurrencies = require("../adapters/CurrencyConverterWithCache");

const getCurrenciesData = async (currencies) => {
    try{
        const rates = await getCurrencies(currencies);
        return rates // { [currency]: rate }
    } catch(err) {
        return err
    }
}

module.exports = {
    getCurrenciesData
}
