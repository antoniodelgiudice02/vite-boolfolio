<script>

import axios from 'axios';

export default {
    data() {
        return {
            title: 'Boolfolio'
        }
    },

    created() {
        console.log(axios)
    }
}



</script>

<template>

    <div class="container">
        <h1>{{ title }}</h1>
    </div>


</template>

<style lang="scss">
@use '/src/scss/general.scss'
</style>
