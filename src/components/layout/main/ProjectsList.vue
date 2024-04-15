<script>

//store
import { api, store } from '../../../store';

export default {
    data() {
        return {
            store,
            title: 'Projects',
        }
    },
}

</script>

<template>

    <div class="container">
        <h1>{{ title }}</h1>
        <div class="row">
            <div v-for='project in store.projects' class="col-4 my-2">
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