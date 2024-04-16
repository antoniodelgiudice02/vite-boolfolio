<script>

export default {

    props: {
        project: Object,
    },

    // computed: {
    //     abstract() {
    //         return this.project.content.length > 25 ? this.project.content.substr(0, 25) + '...' : this.project.content;
    //     }
    // }
}
</script>

<template>

    <div class="col">

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
                    <li>
                        <span :style="'background-color: ' + project.type.color " class="badge">{{ project.type.label }}</span>
                    </li>
                    <li>
                        <span v-for="technology in project.technologies" :style="'background-color: ' + technology.color " class="badge me-2">{{ technology.label }}</span>
                    </li>
                </ul>
            </div>
        </div>

    </div>

</template>

<style lang="scss">
@use '/src/scss/general.scss'
</style>