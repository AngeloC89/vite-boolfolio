<template>
  <div id="pList">
    <div>
      <h1 class=" text-center">//Projects</h1>
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


    <div id="box-card" class="my-1 mx-0 p-0 w-100 ">
      <div id="proj" class="my-3 d-flex justify-content-center" v-for="(project, index) in store.projects"
        :key="project.id">
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
    name: "ProjectList",
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

    h1{
      font-size: 6rem;
    }

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

    #box-card {
      overflow-y: scroll;
      height: 740px;
      display: flex;
      flex-direction: column;
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
  }

  


  @media screen and (max-width: 576px) {
    #pList {
      height: 100%;
      overflow-y: scroll;

      h1 {
        font-size: 4rem;
        margin: 3px;
      }


      #box-card {
        overflow-y: scroll;
        height: 740px;
        display: flex;
        flex-direction: column;
        align-items: center;
    
        #proj {
          width: 70%;
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

    }


  }
</style>
