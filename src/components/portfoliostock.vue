<template>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ stock.name }} ( {{stock.ticker}} )</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ currentPrice }} | {{ qty }}</h6>
            <hr>
            <div class="row">
                <form>
                    <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 input-group">
                        <input type="text" class="form-control" v-model="numShares" />
                        <button class="btn btn-danger" @click.prevent="sellStock(numShares)">Sell</button>
                    </div>
                </form>
            </div>
            <div class="alert alert-danger" role="alert" v-if="alertVisible">
                {{ alertMsg }}
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import { mapGetters } from 'vuex';

    export default {
        props: ['value'],
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
                return "Qty: " + this.value.qty;
            },
            stock() {
                var indexOfStock = this.stocks.findIndex(stock => stock.id === this.value.id);
                return this.stocks[indexOfStock];
            }
        },
        methods: {
            ...mapActions(['sellStockFromPortfolio']),
            sellStock(qty) {
                this.alertMsg = '';
                this.alertVisible = false;

                if( qty > this.value.qty ) {
                    this.alertMsg = 'You do not have ' + qty + " shares to sell.";
                    this.alertVisible = true;
                    return;
                }

                var stockToSell = {
                    qty: qty,
                    id: this.value.id
                }

                this.sellStockFromPortfolio(stockToSell);
            },
        }
    }
</script>
