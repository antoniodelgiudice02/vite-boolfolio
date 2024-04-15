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
            <ProjectCard v-for="project in store.projects" :project="project"></ProjectCard>
        </div>
    </div>


</template>

<style lang="scss">
@use '/src/scss/general.scss'
</style>