<template>
    <div>
        <h1>Portfolio</h1>
        <hr>
        <div class="row">
             <div class="col-sm-3"  v-for="(portfoliostock,index) in portfolio" :key="portfoliostock.id" @click="removeItem(index)" style="cursor: pointer">
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