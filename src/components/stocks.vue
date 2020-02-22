<template>
    <div>
        <h1>Stocks</h1>
        <hr>
        <div class="row">
             <div class="col-sm-3"  v-for="(stock,index) in stocks" :key="stock.id" @click="removeItem(index)" style="cursor: pointer">
                <app-stock v-model="stocks[index]"></app-stock>
             </div>
            
            <!-- <ul>
                <li class="list-group-item" v-for="(stock,index) in stocks" :key="index" @click="removeItem(index)" style="cursor: pointer">
                    <app-stock v-model="stocks[index]"></app-stock>
                </li>
            </ul> -->
        </div>
    </div>
</template>

<script>
    import Stock from './stock.vue';
    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
                
                // stocks : [{id: 100,name: 'Microsoft', currentPrice: 76.54, ticker: 'MSFT'},
                //     {id: 101,name: 'IBM', currentPrice: 60.00, ticker: 'IBM'},
                //     {id: 102,name: 'Apple', currentPrice: 300, ticker: 'APPL'},
                //     {id: 103,name: 'Tesla', currentPrice: 732.22, ticker: 'TSLA'}]
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