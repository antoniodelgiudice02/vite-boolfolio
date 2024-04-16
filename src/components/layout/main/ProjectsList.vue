<script>
import axios from 'axios';

//store
import { api, store } from '../../../store';

//components
import ProjectCard from './ProjectCard.vue'

export default {
    data() {
        return {
            store,
            title: 'Projects',
            pagination: [],
        }
    },

    methods: {
        fetchProject(endpoint = api.baseUrl + 'projects') {
            axios.get(endpoint).then((response) => {
                store.projects = response.data.data;
                this.pagination = response.data.links;
                console.log(this.pagination)
            });
        }

    },

    created() {

        this.fetchProject();

    },

    components: { ProjectCard }
}
</script>

<template>

    <div class="container">
        <h1>{{ title }}</h1>
        <div class="row row-cols-3">
            <router-link v-for="project in store.projects" :to="{ name: 'detail', params: { id: project.id } }">
                <ProjectCard :project="project"></ProjectCard>
            </router-link>
        </div>

        <nav aria-label="...">
            <ul class="pagination">

                <li v-for="link in pagination" class="page-item" :class="link.active ? 'active' : '' " @click="fetchProject(link.url)">
                    <a class="page-link" href="#" v-html="link.label">
                        
                    </a>
                </li>

            </ul>
        </nav>

    </div>


</template>

<style lang="scss">
@use '/src/scss/general.scss'
</style>