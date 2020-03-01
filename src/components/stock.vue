<template>
    <div class="card" style="width: 15rem;">
        <div class="card-body">
            <h5 class="card-title">{{ value.name }} ( {{value.ticker}} )</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ currentPrice }}</h6>
            <hr>
            <div class="row">
                <form>
                    <div class="input-group">
                        <input type="text" class="form-control" v-model="numShares"  style="width: 8rem;" />
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
                var formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                });

                return "Current price: " + formatter.format(this.value.currentPrice);
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

</style>