<template>
    <div>
        <h1>Stocks</h1>
        <hr>
        <div class="row">
             <div class="col-sm-3 card-row"  v-for="(stock,index) in stocks" :key="stock.id" @click="removeItem(index)">
                <app-stock :stock="stock"></app-stock>
             </div>            
        </div>
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
            ...mapGetters(['stocks']),
        },
        methods: {
            removeItem(index) {

            },
        },
        components: {
            appStock: Stock
        }
    }
</script>

<style>
    .card-row {
        cursor: pointer;
        padding-bottom: 40px;
    }
</style>