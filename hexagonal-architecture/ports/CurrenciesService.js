const getCurrencies = require("../adapters/CurrencyConverter");
// const getCurrencies = require("../adapters/CurrencyConverterWithCache");

const getCurrenciesData = async () => {
    try{
        const data = await getCurrencies();
        return data
    } catch(err) {
        return err
    }
}

module.exports = {
    getCurrenciesData
}