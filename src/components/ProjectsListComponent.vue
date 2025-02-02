<template>
  <div id="pList" class="p-3">
    <div>
      <h1 class=" text-end">//Projects</h1>
    </div>

    <div id="counter_technologies" class="mb-5">
      <!-- counter -->
      <div class="counter_list">
        <div v-if="techno">
          <h4>{{ store.projects.length }} projects with {{ selectedTechnology }}</h4>
        </div>
      </div>
      <!-- select -->
      <div id="select">
        <label class="text-black" for="technologies">Technologies</label>
        <br />
        <select class="ms-auto h-50" name="technologies" id="technologies" @change="setParams()" v-model="techno">
          <option value="">All</option>
          <option :value="technology.id" v-for="technology in store.technologies" :key="technology.id">
            {{ technology?.name }}
          </option>
        </select>
      </div>
    </div>


    <div class="row ">
      <div class="col-12 col-lg-3" v-for="(project, index) in store.projects" :key="project.id">
        <CardComponent :item="project" :index="index" />
      </div>
    </div>
  </div>
</template>

<script>
  import CardComponent from "../components/CardComponent.vue";
  import { store } from "../store.js";
  import axios from "axios";
  export default {
    name: "ProjectsListComponent",
    components: {
      CardComponent,
    },
    data() {
      return {
        store,
        techno: "",
      };
    },

    methods: {
      setParams() {
        this.store.params = {};
        if (this.techno) {
          this.store.params.technologies = this.techno;
        }
        store.methods.getAllProjects();
      },
    },


    computed: {
      selectedTechnology() {
        const technology = this.store.technologies.find(
          (technology) => technology.id === this.techno
        );
        return technology ? technology.name : "";
      },
    },
    mounted() {
      this.store.methods.getAllProjects();


    },
  };
</script>

<style lang="scss" scoped>
  #pList {
    padding: 10px;

    h1 {
      font-size: 6rem;
    }

    .counter_list {
      height: 30px;
      color: rgb(255, 168, 76);

      h4 {
        font-size: 2rem;
      }
    }

    select {
      border: 3px solidrgb(255, 168, 76);
      border-radius: 20px;
      padding: 5px;
      appearance: none;
    }

    #counter_technologies {
      width: 100%;
      padding: 10px;
      border: none;
      display: flex;
      align-items: end;
      justify-content: space-between;
    }

    .card {
      background: rgba(167, 167, 167, 0.2);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      border: 1px solid rgba(128, 128, 128, 0.185);
    }
  }

  @media screen and (max-width: 576px) {
    #pList {
      height: 100%;
      overflow-y: scroll;

      h1 {
        font-size: 3rem;
        margin: 3px;
      }

      #counter_technologies {

        select {
          width: 150px;
        }
      }

      .row div{
        margin: 10px 0px;
      }
    }
  }
</style>
