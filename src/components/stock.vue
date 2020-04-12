<template>
    <div class="card" style="width: 17rem;">
        <div class="card-body">
            <h5 class="card-title">{{ stock.name }} ( {{stock.ticker}} )</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ stock.currentPrice | currency }}</h6>
            <hr>
            <div class="row">
                <div class="input-group">
                    <input type="text" class="form-control input-margin" placeholder="Quantity" v-model="numShares" :class="{'is-invalid': insufficientFunds, 'is-valid': (!insufficientFunds && numShares > 0)}" />
                    <div class="invalid-feedback">
                        Insufficient Funds
                    </div>
                    <div class="valid-feedback">
                        Total: {{requiredFunds | currency}}
                    </div>                    
                    <button class="btn btn-primary" @click.prevent="buyStock" :disabled="insufficientFunds || numShares <= 0 || !Number.isInteger(parseInt(numShares))">{{insufficientFunds ? 'Insufficient Funds' : 'Buy'}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import { mapGetters } from 'vuex';

    export default {
        props: ['stock'],
        data() {
            return {
                numShares: 0,
            }
        },
        computed: {
            ...mapGetters(['bankAccount']),
            insufficientFunds() {
                return this.numShares * this.stock.currentPrice > this.bankAccount;
            },
            requiredFunds() {
                return this.numShares * this.stock.currentPrice;
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
    .danger {
        border: 1px solid red;
    }
</style>