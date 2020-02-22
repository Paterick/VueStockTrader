<template>
    <div class="container">
        <app-header></app-header>
        <div class="row">
            <div class="col-md-12">
                <transition name="slide">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import { mapActions } from 'vuex';

    export default {
        components: {
            appHeader: Header
        },
        methods: {
            ...mapActions(['initializeStocks']),
        },
        created(){
            this.initializeStocks();
        },
    }
</script>

<style>
    body {
        padding: 30px;
    }
</style>
