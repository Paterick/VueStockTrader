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
            state.portfolio[indexOfItemToAdd].qty += payload.qty;
        }
        else {
            state.portfolio.push(payload);
        }

        state.bankAccount -= (payload.currentPrice * payload.qty);

        console.log("addStockToPortfolio mutation", state.portfolio, state.bankAccount);
    },
    removeStockFromPortfolio: (state, payload) => {
        var indexOfItemToDelete = state.portfolio.findIndex(stock => stock.id === payload.id);

        if( indexOfItemToDelete > -1) {
            state.portfolio.splice(indexOfItemToDelete, 1);
        }
    },
    initializeStocks: (state) => {
        // console.log("initializeStocks mutation");
        state.stocks =  [
            {id: 100,name: 'Microsoft', currentPrice: 76.54, ticker: 'MSFT', qty: 0},
            {id: 101,name: 'IBM', currentPrice: 60.00, ticker: 'IBM', qty: 0},
            {id: 102,name: 'Apple', currentPrice: 300, ticker: 'APPL', qty: 0},
            {id: 103,name: 'Tesla', currentPrice: 732.22, ticker: 'TSLA', qty: 0},
            {id: 104,name: 'Bitcoin', currentPrice: 8543.34, ticker: 'BTCN', qty: 0}];
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
    removeStockFromPortfolio: (context, payload) => {
        context.commit('removeStockFromPortfolio', payload);
    },
    initializeStocks: (context) => {
        context.commit('initializeStocks');
    },
    asyncIncrement: (context, payload) => {
        setTimeout(() => {
            context.commit('increment', payload.by);
        }, payload.duration);
    },
    asyncDecrement: (context, payload) => {
        setTimeout(() => {
            context.commit('decrement', payload.by);
        }, payload.duration);
    }
};

export default {
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
}