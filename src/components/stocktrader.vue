<template>
    <div>
        <h1>Trade or View your Portfolio</h1>
        <hr>
        <h5>You may Save & Load your data</h5>
        <h5>Click <b>End Day</b> to begin a new day!</h5>
        <hr>
        <h2>Your Funds: {{formattedAccountBalance}}</h2>
    </div>
</template>

<script>
    import Stock from './stock.vue';
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters(['bankAccount']),
            formattedAccountBalance() {
                var formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    });

                return formatter.format(this.bankAccount);
            },
        },
        
        methods: {
            ...mapActions(['endTradingDay', 'save', 'load']),
        }
    }
</script>