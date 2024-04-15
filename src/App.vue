<script>

import axios from 'axios';

//store
import { api, store } from './store';

//componenti
import AppHeader from './components/layout/AppHeader.vue';
import ProjectsList from './components/layout/main/ProjectsList.vue';

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

    components: { AppHeader, ProjectsList }
}



</script>

<template>

    <AppHeader :title="title"></AppHeader>

    <ProjectsList></ProjectsList>


</template>

<style lang="scss">
@use '/src/scss/general.scss'
</style>
