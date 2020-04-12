// import User from './components/user/User.vue';
// import Home from './components/Home.vue';
// import UserStart from './components/user/UserStart.vue'
// import UserEdit from './components/user/UserEdit.vue'
// import UserDetail from './components/user/UserDetail.vue'
import Header from './components/header.vue'
import StockTrader from './components/StockTrader.vue';
import Portfolio from './components/Portfolio.vue';
import Stocks from './components/Stocks.vue';

export const routes = [
    // { path: '/home', name: "home", components: {default: Home, 'header-top': Header } },
    // { path: '/user', components: {default: User, 'header-bottom': Header }, children: [
    //   { path: '', component: UserStart},
    //   { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
    //     console.log("Inside route setup");
    //     next();
    //   } },
    //   { path: ':id/edit', component: UserEdit, name: "userEdit"} 
    // ]},
    // { path: '/redirect-me', redirect: {name: 'home'}},
    // { path: '*', redirect: {name: 'home'}}
    { path: '/home', name: "stocktrader", components: {default: StockTrader, 'header': Header } },
    { path: '/portfolio', name: "portfolio", components: {default: Portfolio, 'header': Header } },
    { path: '/stocks', name: "stocks", components: {default: Stocks, 'header': Header } },
    { path: '*', redirect: {name: 'stocktrader'}}
]