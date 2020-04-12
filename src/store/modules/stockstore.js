const state = {
    stocks: [],
    portfolio: [],
    bankAccount: 10000,
};

const storageId = "VueStockTrader";

const getters = {
    bankAccount: (state) => {
        return state.bankAccount;
    },
    stocks: (state) => {
        return state.stocks;
    },
    portfolio: (state) => {
        return state.portfolio;
    },
    stock: (state, id) => {
        return state.stocks.find(stock => stock.id === id);
    },
    portfolioStock: (state, id) => {
        return state.portfolio.find(stock => stock.id === id);
    }    
};

const mutations = {
    addStockToPortfolio: (state, payload) => {
        var portfolioStock = getters.portfolioStock(state, payload.id);
        var stockToAdd = getters.stock(state, payload.id);

        if( portfolioStock != null) {
            portfolioStock.qty = parseInt(portfolioStock.qty) + parseInt(payload.qty);
        }
        else {
            state.portfolio.push({id: payload.id,  qty: parseInt(payload.qty)});
        }

        state.bankAccount -= (stockToAdd.currentPrice * payload.qty);

        console.log(`Added ${payload.qty} shares of ${stockToAdd.name} to portfolio.`, state.portfolio, state.bankAccount);
    },
    sellStockFromPortfolio: (state, payload) => {
        var portfolioStock = getters.portfolioStock(state, payload.id);
        var stockToSell = getters.stock(state, payload.id);

        console.log(`Selling ${payload.qty} shares of ${stockToSell.name} and portfolio has ${portfolioStock.qty} available to sell.`);

        portfolioStock.qty -= parseInt(payload.qty);

        if( portfolioStock.qty === 0) {
            state.portfolio.splice(state.portfolio.indexOf(portfolioStock), 1);
            console.log(`All shares of ${stockToSell.name} have been sold. Removing stock from portfolio.`);
        }

        state.bankAccount += (stockToSell.currentPrice * payload.qty);
    },
    initializeStocks: (state) => {

        state.stocks =  [
            {id: 100,name: 'Microsoft', currentPrice: 76.54, ticker: 'MSFT', qty: 0, volitility: .1},
            {id: 101,name: 'IBM', currentPrice: 60.00, ticker: 'IBM', qty: 0, volitility: .1},
            {id: 102,name: 'Apple', currentPrice: 300, ticker: 'APPL', qty: 0, volitility: .2},
            {id: 103,name: 'Tesla', currentPrice: 732.22, ticker: 'TSLA', qty: 0, volitility: .3},
            {id: 104,name: 'Bitcoin', currentPrice: 8543.34, ticker: 'BTCN', qty: 0, volitility: .5}];
    },
    endTradingDay: (state) => {
        state.stocks.forEach((stock) => {
            stock.currentPrice = helpers.calculateStockPrice(stock.currentPrice, stock.volitility);
         });
    },
    save: (state) => {
        localStorage.setItem(storageId, JSON.stringify(state));
    },
    load: (state) => {
        var savedState = JSON.parse(localStorage.getItem(storageId));
        
        state.bankAccount = savedState.bankAccount;
        state.stocks = savedState.stocks;
        state.portfolio = savedState.portfolio;
    },
};

const actions = {
    notUsedExample: ( {commit} ) => {
        // This function is not using this for anything real but show how to 'destructure' an argument in ES6
        // It's pulling out the commit property from the context object passed in. Everything else is lost
        // but it's a shortcut if it's the only item you're interested in. 
    },
    addStockToPortfolio: (context, payload) => {
        context.commit('addStockToPortfolio', payload);
    },
    sellStockFromPortfolio: (context, payload) => {
        context.commit('sellStockFromPortfolio', payload);
    },
    initializeStocks: (context) => {
        context.commit('initializeStocks');
    },
    endTradingDay: (context) => {
        context.commit('endTradingDay');
    },
    save: (context) => {
        context.commit('save');
    },
    load: (context) => {
        context.commit('load');
    }    
};

const helpers = {
    calculateStockPrice: (price, range) => {
        var max = price + (price * (range*1.2));
        var min = price - (price * (range*.8));

        const rndNumber = Math.round(Math.random() * (max - min)) + min;
        return rndNumber;
    },
    formatCurrency: (amount) => {
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            });

        return formatter.format(amount);
    }
}

export default {
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions,
    helpers: helpers
}