<template>

  <div class="container">
    <button id="back" class="btn " @click="$router.go(-1)"><i class="fa-solid fa-arrow-left"></i></button>
    <!-- the name of the project, is a link to view the demo -->
    <h1 class="text-center display-1">{{ project?.title }}</h1>
    <div v-if="images && images.length > 0">
      <img v-for="image in images" :key="image.id" id="img_demo" class="d-block mx-auto"
        :src="store.imgBaseUrl + image.path" :alt="project?.title" />
    </div>

    <div v-if="project?.technologies && project.technologies.length > 0" class="d-flex justify-content-center">
      <p v-for="technology in project.technologies" :key="technology.id" class="text-center fw-bolder fs-2 mx-3">
        {{ technology.name }}
      </p>
    </div>

    <div class="d-flex justify-content-center">
      <button class="btn"><a class="text-decoration-none" :href="project?.link">
          Play
          {{ project?.title }}
        </a></button>
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

      backIf() {
        const btn = document.getElementById('back');

        if (window.innerWidth < 768) {
          btn.style.display = 'none';
        }
      },

    },



    mounted() {
      this.getProjects();
      this.backIf();
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

  #back {
    position: absolute;
    top: 3%;
    font-size: 3rem;



  }

  .btn {
    border: 2px solid rgb(23, 108, 6);

    &:hover {
      color: rgb(23, 108, 6);
    }
  }

  #img_demo {
    height: 500px;
  }

  a {
    text-decoration: none;
    color: rgb(0, 0, 0);

    &:hover {
      color: rgb(23, 108, 6);
    }
  }

  #description {

    padding: 20px;

    p {
      font-family: 'Courier New', Courier, monospace;
    }

  }

  @media screen and (max-width: 576px) {

    .container {
      height: 100%;
      overflow-y: scroll;
      padding-top: 45px;


      #img_demo {
        height: 200px;
      }


    }

  }


</style>