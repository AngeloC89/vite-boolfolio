<template>

  <h1 class="text-center">{{ project?.title }}</h1>
  <div v-if="images && images.length > 0">
    <img
      v-for="image in images"
      :key="image.id"
      class="d-block mx-auto"
      :src="store.imgBaseUrl + image.path"
      :alt="project?.title"
    />
  </div>
  <p class="text-center fw-bolder fs-2">{{ project?.content }}</p>
  <div v-if="project?.technologies && project.technologies.length > 0">
    <p v-for="technology in project.technologies" :key="technology.id" class="text-center fw-bolder fs-2">
      {{ technology.name }}
    </p>
  </div>
 
  


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
        images: null,
      };
    },
    methods: {
      getProjects() {
            // console.log(this.$route);
            axios.get(`${this.store.apiBaseUrl}/projects/${this.$route.params.slug}`).then((res) => {
                
                this.project = res.data.results;
                this.images = res.data.results.images;
                console.log(this.project);
                console.log(this.images);
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