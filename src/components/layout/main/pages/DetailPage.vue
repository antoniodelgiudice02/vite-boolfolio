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

    <div class="container">
        <div class="row row-col-4">


            <div class="col">



                <div class="card">
                    <div class="card-header">{{ store.project.title }}</div>
                    <div class="card-body">
                        <ul>
                            <li>
                                <strong>Id:</strong><span>{{ store.project.id }}</span>
                            </li>
                            <li>
                                <strong>Descrizione:</strong><span>{{ store.project.content }}</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped></style>