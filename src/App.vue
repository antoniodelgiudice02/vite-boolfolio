<script>

import axios from 'axios';

export default {
    data() {
        return {
            title: 'Boolfolio',
            projects: [],
        }
    },

    created() {
        axios.get('http://127.0.0.1:8000/api/projects').then((response) => { this.projects = response.data.data; console.log(response.data.data) });
    },

    // methods() {
    //     function getContent(n_char, text) {
    //         if(strlen(text) > n_char){
    //             return substr(text, 0, n_char) + '...';
    //         }
    //         else{
    //             return text;
    //         }
    //     }
    // }
}



</script>

<template>

    <div class="container">
        <h1>{{ title }}</h1>
        <div class="row">
            <div v-for='project in projects' class="col-3">
                <div class="card">
                    <div class="card-header">{{ project.title }}</div>
                    <div class="card-body">
                        <ul>
                            <li>
                                <strong>Id:</strong><span>{{ project.id }}</span>
                            </li>
                            <li>
                                <strong>Descrizione:</strong><span>{{ project.content }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<style lang="scss">
@use '/src/scss/general.scss'
</style>
