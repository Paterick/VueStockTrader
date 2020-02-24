const state = {
    stocks: [],
    portfolio: [],
    bankAccount: 10000,
};

const getters = {
    bankAccount: (state) => {
        return state.bankAccount;
    },
    stocks: (state) => {
        // console.log("stocks getter", state.stocks);
        return state.stocks;
    },
    portfolio: (state) => {
        return state.portfolio;
    },    
};

const mutations = {
    addStockToPortfolio: (state, payload) => {
        var indexOfItemToAdd = state.portfolio.findIndex(stock => stock.id === payload.id);

        if( indexOfItemToAdd > -1) {
            state.portfolio[indexOfItemToAdd].qty = state.portfolio[indexOfItemToAdd].qty + payload.qty;
        }
        else {
            state.portfolio.push(payload);
        }

        state.bankAccount -= (payload.currentPrice * payload.qty);

        console.log(`Added ${payload.qty} shares of ${payload.name} to portfolio.`, state.portfolio, state.bankAccount);
    },
    sellStockFromPortfolio: (state, payload) => {
        var indexOfPortfolioItem = state.portfolio.findIndex(stock => stock.id === payload.id);
        var indexOfStock= state.stocks.findIndex(stock => stock.id === payload.id);
        var stock = state.stocks[indexOfStock];
        var portfolioStock = state.portfolio[indexOfPortfolioItem];

        console.log(`Selling ${payload.qty} shares of ${payload.name} and portfolio has ${portfolioStock.qty} available to sell.`);

        if( indexOfPortfolioItem > -1 && portfolioStock.qty === payload.qty) {

            state.portfolio.splice(indexOfPortfolioItem, 1);
        }
        else {
            portfolioStock.qty -= payload.qty;
        }

        state.bankAccount += (stock.currentPrice * payload.qty);
    },
    initializeStocks: (state) => {
        // console.log("initializeStocks mutation");
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
    }
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
    }
};

const helpers = {
    calculateStockPrice: (price, range) => {
        var max = price + (price * range);
        var min = price - (price * range);

        const rndNumber = Math.round(Math.random() * (max - min)) + min;
        return rndNumber;
    }
}

export default {
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions,
    helpers: helpers
}