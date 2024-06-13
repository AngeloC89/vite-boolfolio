<template>
  <div class="container my-3">
    <div class="d-flex align-items-center">
      <h1 class="my-2">Project List</h1>
      <select class="ms-auto h-50" name="technologies" id="technologies" >
        <option value="">All Technologies</option>
        <option v-for="techology in store.technologies" value="techology.id">{{ techology?.name }}</option>
      </select>
    </div>
    <div class="row">
    
      <div class="col-12 col-lg-6" v-for="project in projects" :key="project.id">
          <CardComponent :item="project" />
      </div>
  </div>
    <!-- pagination for the cards.... visible only in projectList -->
    <nav class="my-3">

      <ul class="pagination">
        <!-- prev -->
        <li class="page-item">
          <a @click="setParams(currentPage - 1)" :class="{ disabled: currentPage === 1 }" class="page-link" href="#"
            aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <!-- pages -->
        <li class="page-item" v-for="page in totalPages" :key="page">
          <a @click="setParams(page)" :class="{ active: currentPage === page }" class="page-link" href="#">{{ page
            }}</a>
        </li>
        <!-- next -->
        <li class="page-item">
          <a @click="setParams(currentPage + 1)" :class="{ disabled: currentPage === totalPages }" class="page-link"
            href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import CardComponent from "../components/CardComponent.vue";
  import { store } from "../store.js";
  import axios from "axios";
  export default {
    name: "ProjectList",
    components: {
      CardComponent,
    },
    data() {
      return {
        store,
        projects: [],
        currentPage: null,
        totalPages: null,
        params: null,
        techno: [],
      };
    },
    methods: {
      setParams(thepage) {
        this.currentPage = thepage;
        this.params = {
          page: this.currentPage,
        };
        if (this.techno) {
          this.params.techno = this.techno
        }
        this.getAllProjects();
      },

      getAllProjects() {
        axios
          .get(this.store.apiBaseUrl + "/projects", { params: this.params })
          .then((res) => {
            this.projects = res.data.results.data;

            this.currentPage = res.data.results.current_page;
            this.totalPages = res.data.results.last_page;
            this.params = null;

            console.log(this.projects);
          });
      },
    },

    computed: {
        selectedTechnology() {
            const technology = this.store.technologies.find(technology => technology.id == this.techno);
            return technology ? technology.name : '';
        },
        
    },
    mounted() {
      this.getAllProjects();
     
    
    },
  };
</script>

<style lang="scss" scoped></style>
