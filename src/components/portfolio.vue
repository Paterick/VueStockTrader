<template>
    <div>
        <h1>Portfolio</h1>
        <hr>
        <div class="row">
             <div class="col-sm-3 card-row"  v-for="(portfoliostock,index) in portfolio" :key="portfoliostock.id" @click="removeItem(index)">
                <app-portfolio-stock v-model="portfolio[index]"></app-portfolio-stock>
             </div>
        </div>
    </div>
</template>

<script>
    import PortfolioStock from './portfoliostock.vue';
    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters(['portfolio']),
        },
        methods: {
            removeItem(index) {

            },
        },
        components: {
            appPortfolioStock: PortfolioStock
        }
    }
</script>

<style>
    .card-row {
        cursor: pointer;
        padding-bottom: 40px;
    }
</style>