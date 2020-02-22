import Vue from 'vue';
import Vuex from 'vuex';
import stockstore from './modules/stockstore.js';
// import * as actions from './actions.js';


Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        stockstore: stockstore, // Merges in code from other modules into the one and only Vuex store object.
    }
});

