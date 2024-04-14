<script>

import axios from 'axios';

export default {
    data() {
        return {
            title: 'Boolfolio'
        }
    },

    created() {
        axios.get('http://127.0.0.1:8000/api/projects').then((response) => {console.log(response.data.data)});
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
