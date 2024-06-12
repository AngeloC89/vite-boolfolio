<template>
  <div class="container">
    <div class="row d-flex">
      <div v-for="project in projects" :key="project.id" class="card p-0 w-25">
        <img class="card-img-top img-fluid" :src="store.imgBaseUrl + project.image" :alt="project.title">
        <div class="card-body">
          <h5 class="card-title">{{ project.title }}</h5>
          <p class="card-text text-truncate">{{ project.content }}</p>
          <router-link :to="{ name: 'project-details', params: { 'slug': project.slug } }"
            class="btn btn-primary">View</router-link>
        </div>
      </div>
    </div>
    <nav class="my-3">
      <!-- pagination for the cards.... visible only in projectList -->
      <ul class="pagination">
        <!-- prev -->
        <li class="page-item">
          <a @click="setParams(currentPage - 1)" :class="{ 'disabled': currentPage === 1 }" class="page-link" href="#"
            aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <!-- pages -->
        <li class="page-item" v-for="page in totalPages" :key="page"><a @click="setParams(page)"
            :class="{ 'active': currentPage === page }" class="page-link" href="#">{{ page }}</a></li>
        <!-- next -->
        <li class="page-item">
          <a @click="setParams(currentPage + 1)" :class="{ 'disabled': currentPage === totalPages }" class="page-link"
            href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>


<script>
  import { store } from '../store.js';
  import axios from 'axios';
  export default {
    name: 'ProjectList',
    data() {
      return {
        store,
        projects: [],
        currentPage: null,
        totalPages: null,
        params: null
      }
    },
    methods: {
      setParams(thepage) {
        this.currentPage = thepage;
        this.params = {
          page: this.currentPage
        }
        this.getAllProjects();


      },
      getAllProjects() {

        axios
          .get(this.store.apiBaseUrl + '/projects', { params: this.params })
          .then((res) => {
            this.projects = res.data.results.data

            this.currentPage = res.data.results.current_page;
            this.totalPages = res.data.results.last_page;

            console.log(res.data.results)
          })
      },

    },
    mounted() {
      this.getAllProjects()
    },
  }
</script>

<style lang="scss" scoped></style>