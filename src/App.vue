<template>
  <h1 class="text-center">Ciao</h1>
  <ul >
    <li v-for="project in projects" :key="project.id">{{ project.title }}</li>
  
  </ul>
  <i class="fa fa-solid fa-home"></i>
</template>

<script>
  import { store } from './store.js';
  import axios from 'axios';
  export default {
    name: 'App',
    data() {
      return {
        store,
        projects: []
      }
    },
    methods: {
      getAllProjects() {
        axios
          .get(this.store.apiBaseUrl + '/projects')
          .then((res) => {
            this.projects = res.data.results

            //console.log(res.data)
          })
      }
    },
    mounted() {
      this.getAllProjects()
    },
  }
</script>

<style lang="scss" scoped></style>