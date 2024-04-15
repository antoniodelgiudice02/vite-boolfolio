<script>

//store
import { api, store } from '../../../store';

//components
import ProjectCard from './ProjectCard.vue'

export default {
    data() {
        return {
            store,
            title: 'Projects',
        }
    },

    components:{ ProjectCard }
}
</script>

<template>

    <div class="container">
        <h1>{{ title }}</h1>
        <div class="row row-cols-3">
            <router-link v-for="project in store.projects"  :to="{ name: 'detail', params: {id: project.id} }">
                <ProjectCard :project="project"></ProjectCard>
            </router-link>
        </div>
    </div>


</template>

<style lang="scss">
@use '/src/scss/general.scss'
</style>