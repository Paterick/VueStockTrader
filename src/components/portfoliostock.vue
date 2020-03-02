<template>
    <div class="card" style="width: 15rem;">
        <div class="card-body">
            <h5 class="card-title">{{ stock.name }} ( {{stock.ticker}} )</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ currentPrice }}</h6>
            <h6 class="card-subtitle mb-2 text-muted">{{ qty }}</h6>
            <hr>
            <div class="row">
                <div class="input-group">
                    <input type="text" class="form-control input-margin" placeholder="Quantity" v-model="numShares" />
                    <button class="btn btn-danger" @click.prevent="sellStock" :disabled="numShares <= 0 || !Number.isInteger(parseInt(numShares))">Sell</button>
                </div>
            </div>
            <div class="row">
                <div class="alert alert-danger message-margin" role="alert" v-if="alertVisible">
                    {{ alertMsg }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import { mapGetters } from 'vuex';

    export default {
        props: ['portfoliostock'],
        data() {
            return {
                numShares: 0,
                alertMsg: '',
                alertVisible: false,
            }
        },
        computed: {
            ...mapGetters(['stocks']),
            currentPrice() {
                var formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                });

                return "Current price: " + formatter.format(this.stock.currentPrice);
            },
            qty() {
                return "Qty: " + this.portfoliostock.qty;
            },
            stock() {
                var indexOfStock = this.stocks.findIndex(stock => stock.id === this.portfoliostock.id);
                return this.stocks[indexOfStock];
            }
        },
        methods: {
            ...mapActions(['sellStockFromPortfolio']),
            sellStock() {
                this.alertMsg = '';
                this.alertVisible = false;

                if( this.numShares > this.portfoliostock.qty ) {
                    this.alertMsg = 'You do not have ' + this.numShares + " shares to sell.";
                    this.alertVisible = true;
                    return;
                }

                var stockToSell = {
                    qty: this.numShares,
                    id: this.portfoliostock.id
                }

                this.sellStockFromPortfolio(stockToSell);
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