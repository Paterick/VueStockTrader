<template>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ value.name }} ( {{value.ticker}} )</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ currentPrice }}</h6>
            <hr>
            <div class="row">
                <form>
                    <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                        <input type="text" class="form-control" v-model="numShares" />
                        <button class="btn btn-primary" @click.prevent="buyStock(numShares)">Buy</button>
                    </div>
                </form>
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
            }
        },
        computed: {
            currentPrice() {
                return "Current price: $" + this.value.currentPrice.toFixed(2);
            },
            
        },
        methods: {
            ...mapActions(['addStockToPortfolio']),
            buyStock(qty) {
                var stockToBuy = {
                    qty: qty,
                    id: this.value.id
                }

                this.addStockToPortfolio(stockToBuy);
            },
        }
    }
</script>

<style>
    .card-border {
        border: 1px solid rgba(0, 0, 0, .125);
        border-radius: .25 rem;
        padding: 5 rem;
    }
</style>