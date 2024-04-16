<script>

import axios from 'axios'
import { api, store } from '../../../../store'

import ProjectCard from '../ProjectCard.vue'

export default {

    data(){

        return{
            store,
        }

    },

    created() {
        const projectId = this.$route.params.id;
        axios.get(api.baseUrl + `projects/${projectId}`).then((response) => {
            store.project = response.data;
            console.log(store.project)
        })
    },

    components: { ProjectCard }
}

</script>

<template>

    <div class="container hw-100">
        <div class="row row-col-4 justify-content-center align-items-center">
            <ProjectCard :project="store.project"></ProjectCard>

        </div>
    </div>

</template>

<style lang="scss" scoped></style>