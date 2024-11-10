<template>

  <div class="container">
    <!-- the name of the project, is a link to view the demo -->
    <h1 class="text-center display-1"><a class="text-decoration-none" :href="project?.link">
        {{ project?.title }}
      </a></h1>
    <div v-if="images && images.length > 0">
      <img v-for="image in images" :key="image.id" id="img_demo" class="d-block mx-auto"
        :src="store.imgBaseUrl + image.path" :alt="project?.title" />
    </div>

    <div v-if="project?.technologies && project.technologies.length > 0" class="d-flex justify-content-center">
      <p v-for="technology in project.technologies" :key="technology.id" class="text-center fw-bolder fs-2 mx-3">
        {{ technology.name }}
      </p>
    </div>

    <div id="description">
      <p class="text-center fs-2">{{ project?.content }}</p>

    </div>
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


<style lang="scss" scoped>

  #img_demo {
    height: 500px;
  }

  a {
    text-decoration: none;
    color: grey;

    &:hover {
      color: rgb(36, 43, 255);
    }
  }

  #description {

    padding: 20px;

    p {
      font-family: 'Courier New', Courier, monospace;
    }

  }


</style>