<template>
    <div>
        <h1>Stocks</h1>
        <hr>
        <div class="row">
             <div class="col-sm-3"  v-for="(stock,index) in stocks" :key="stock.id" @click="removeItem(index)" style="cursor: pointer">
                <app-stock v-model="stocks[index]"></app-stock>
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