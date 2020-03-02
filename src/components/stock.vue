<template>
    <div class="card" style="width: 15rem;">
        <div class="card-body">
            <h5 class="card-title">{{ stock.name }} ( {{stock.ticker}} )</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ currentPrice }}</h6>
            <hr>
            <div class="row">
                <div class="input-group">
                    <input type="text" class="form-control input-margin" placeholder="Quantity" v-model="numShares" />
                    <button class="btn btn-primary" @click.prevent="buyStock" :disabled="numShares <= 0 || !Number.isInteger(parseInt(numShares))">Buy</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        props: ['stock'],
        data() {
            return {
                numShares: 0,
            }
        },
        computed: {
            currentPrice() {
                var formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                });

                return "Current price: " + formatter.format(this.stock.currentPrice);
            },
            
        },
        methods: {
            ...mapActions(['addStockToPortfolio']),
            buyStock() {
                var stockToBuy = {
                    qty: this.numShares,
                    id: this.stock.id
                }

                this.addStockToPortfolio(stockToBuy);
                this.numShares = 0;
            },
        }
    }
</script>

<style>
    .input-margin {
        margin-right: 7px;
    }
    .message-margin {
        margin-top: 7px;
    }    
</style>