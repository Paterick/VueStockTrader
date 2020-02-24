<template>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ value.name }} ( {{value.ticker}} )</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ currentPrice }} | {{ qty }}</h6>
            <hr>
            <div class="row">
                <form>
                    <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
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
            currentPrice() {
                return `Current price: $${this.value.currentPrice.toFixed(2)}`;
            },
            qty() {
                return "Qty: " + this.value.qty;
            },            
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

                this.value.qty = qty;
                this.sellStockFromPortfolio(this.value);
            },
        }
    }
</script>
