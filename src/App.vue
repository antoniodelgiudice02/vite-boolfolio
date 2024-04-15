<script>

import axios from 'axios';

//store
import { api, store } from './store';

//componenti
import AppHeader from './components/layout/AppHeader.vue';

export default {
    data() {
        return {
            store,
            title: 'Boolfolio'
        }
    },

    created() {
        axios.get(api.baseUrl + 'projects').then((response) => {
            store.projects = response.data.data;
        });
        
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
