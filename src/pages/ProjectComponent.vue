<template>

  <h1 class="text-center">{{ project?.title }}</h1>
  <img class="d-block mx-auto" :src=" store.imgBaseUrl + project?.image " :alt="project?.title">
  <p class="text-center fw-bolder fs-2">{{ project?.content }}</p>


</template>


<script>
  import { store } from '../store.js';
  import axios from 'axios';

  export default {
    name: 'ProjectComponent',
    data() {
      return {
        store,
        project: null,
      };
    },
    methods: {
      getProjects() {

        axios.get(`${this.store.apiBaseUrl}/projects/${this.$route.params.slug}`)
          .then((res) => {
            this.project = res.data.results;
          });
          
      },
    },
    mounted() {
      this.getProjects();
    },
  };
</script>


<style lang="scss" scoped></style>