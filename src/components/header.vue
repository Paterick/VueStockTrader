<template>
<nav class="navbar navbar-expand-md">
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul class="nav">
        <router-link tag="li" class="nav-item" active-class="active" to="/home"><a class="nav-link">Stock Trader</a></router-link>
        <router-link tag="li" class="nav-item" active-class="active" to="/portfolio"><a class="nav-link">Portfolio</a></router-link>
        <router-link tag="li" class="nav-item" active-class="active" to="/stocks"><a class="nav-link">Stocks</a></router-link>
        </ul>
    </div>
    <div class="mx-auto order-0">
        <a class="navbar-brand mx-auto" href="#">Vue Stock Trader</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item"><a class="nav-link" href="#" @click="endTradingDay">End Day</a></li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Save & Load</a>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
                <a class="dropdown-item" href="#" @click="load">Load Data</a>
                </div>
            </li>
            <li class="nav-item">
                <span class="navbar-text"><b> Funds: {{bankAccount | currency}} </b></span>    
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
    import Stock from './stock.vue';
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters(['bankAccount', 'stocks', 'portfolio']),
        },
        
        methods: {
            ...mapActions(['endTradingDay', 'save', 'load']),
            saveData() {
                const data = {
                    bankAccount: this.bankAccount,
                    stocks: this.stocks,
                    portfolio: this.portfolio
                }

                this.$http.put('data.json', data);
                // this.save();
            }
        }
    }
</script>

<style>
    .active {
        background-color: lightgray;
        font-weight: bold;
        color: black;
    }
</style>