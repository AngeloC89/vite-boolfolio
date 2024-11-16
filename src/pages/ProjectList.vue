<template>
  <div id="pList">
    <div>
      <h1 class="my-2 text-center">//Projects</h1>
    </div>

    <div id="counter_technologies">
      <!-- counter -->
      <div class="counter_list">
        <div v-if="techno">
          <h4>{{ store.projects.length }} projects with {{ selectedTechnology }}</h4>
        </div>
      </div>
      <!-- select -->
      <div id="select">
        <label class="text-white" for="technologies">Technologies</label>
        <br />
        <select class="ms-auto h-50" name="technologies" id="technologies" @change="setParams(1)" v-model="techno">
          <option value="">All</option>
          <option :value="technology.id" v-for="technology in store.technologies" :key="technology.id">
            {{ technology?.name }}
          </option>
        </select>
      </div>
    </div>
  </div>

  <div id="box-card" class="row my-3 mx-0 p-0">
    <div id="proj" class="col-12 col-lg-12 my-3 d-flex justify-content-center"
      v-for="(project, index) in store.projects" :key="project.id">
      <CardComponent :item="project" :index="index" />
    </div>
  </div>
  <!-- pagination for the cards.... visible only in projectList -->
  <nav v-if="store.projects.length > 4" class="my-3">
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
        <a @click="setParams(page)" :class="{ active: currentPage === page }" class="page-link" href="#">{{ page }}</a>
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
        currentPage: null,
        totalPages: null,
        params: null,
        techno: "",
      };
    },
    methods: {
      setParams(thepage) {
        console.log(this.techno);
        this.currentPage = thepage;
        this.params = {
          page: this.currentPage,
        };
        if (this.techno) {
          this.params.technologies = this.techno;
        }
        this.getAllProjects();
      },

      getAllProjects() {
        axios
          .get(this.store.apiBaseUrl + "/projects", { params: this.params })
          .then((res) => {
            this.store.projects = res.data.results.data;

            this.currentPage = res.data.results.current_page;
            this.totalPages = res.data.results.last_page;

            console.log(this.store.projects);
          })
          .catch((error) => {
            console.log("Error fetching projects", error);
          })
          .finally(() => {
            //loader
          });
      },
    },

    computed: {
      selectedTechnology() {
        const technology = this.store.technologies.find(
          (technology) => technology.id == this.techno
        );
        return technology ? technology.name : "";
      },
    },
    mounted() {
      this.getAllProjects();
    },
  };
</script>

<style lang="scss" scoped>
  #pList {
    padding: 10px;

    .counter_list {
      height: 30px;
      color: rgb(22, 22, 130);
    }

    #counter_technologies {
      width: 100%;
      padding: 10px;
      border: none;
      display: flex;
      align-items: end;
      justify-content: space-between;
    }
  }

  #box-card {
    overflow-y: scroll;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #proj {
      width: 50%;
      transition: 1s;
    }

    #proj:nth-child(odd) {
      transform: translateX(15%) rotate(-2deg);


      /* Sposta a sinistra e ruota leggermente */
    }

    #proj:nth-child(even) {
      transform: translateX(-15%) rotate(2deg);

      /* Sposta a destra e ruota leggermente */
    }

    #proj:hover {
      transform: scale(1.1) rotate(0deg);
      transition: 1s;
      /* Porta in primo piano la card */
    }

  }
</style>
