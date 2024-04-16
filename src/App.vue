<script>



//store
import { api, store } from './store';

//componenti
import AppHeader from './components/layout/AppHeader.vue';

export default {
    data() {
        return {
            store,
            title: 'Boolfolio',
            pagination: [],
        }
    },

    components: { AppHeader }
}



</script>

<template>

    <AppHeader :title="title"></AppHeader>

    <!-- <ProjectsList></ProjectsList> -->
    <div class="container">
        <router-view></router-view>
    </div>


</template>

<style lang="scss">
@use '/src/scss/general.scss'
</style>
