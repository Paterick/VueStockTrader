<template>
    <div>
        <ul class="nav">
        <router-link tag="li" class="nav-item" active-class="active" to="/home"><a class="nav-link">Stock Trader</a></router-link>
        <router-link tag="li" class="nav-item" active-class="active" to="/portfolio"><a class="nav-link">Portfolio</a></router-link>
        <router-link tag="li" class="nav-item" active-class="active" to="/stocks"><a class="nav-link">Stocks</a></router-link>
        </ul>
        <ul class="nav justify-content-end">
            <li class="nav-item"><a class="nav-link" href="#">End Day</a></li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Save & Load</a>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Save Data</a>
                <a class="dropdown-item" href="#">Load Data</a>
                </div>
            </li>
            <li class="nav-item">Funds: $ {{bankAccount.toFixed(2)}} </li>
        </ul>
    </div>
</template>

<script>
    import Stock from './stock.vue';
    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters(['bankAccount']),
        },
        methods: {
        }
    }
</script>