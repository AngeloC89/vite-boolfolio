<template>

  <h1 class="text-center">{{ project?.title }}</h1>
  <img class="d-block mx-auto" :src=" store.imgBaseUrl + project?.image " :alt="project?.title">
  <p class="text-center fw-bolder fs-2">{{ project?.content }}</p>
  <p class="text-center fw-bolder fs-2">{{ project?.technologies.name }}</p>
  
 
  


</template>


<script>
  import { store } from '../store.js';
  import axios from 'axios';

  export default {
    name: 'ProjectComponent',
    props: ['item'],
    data() {
      return {
        store,
        project: null,
      };
    },
    methods: {
      getProjects() {
            // console.log(this.$route);
            axios.get(`${this.store.apiBaseUrl}/projects/${this.$route.params.slug}`).then((res) => {
                console.log(res.data.results);
                this.project = res.data.results;
            }).catch((error) => {
                // console.log(error);
                // console.log(error.response.data);
                this.$router.push({ name: 'not-found' });
            }).finally();
        },
     
    },
    mounted() {
      this.getProjects();
    },
    created() {
        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                // react to route changes...
                this.getProjects();
            }
        )
    },
    
  };
</script>


<style lang="scss" scoped></style>