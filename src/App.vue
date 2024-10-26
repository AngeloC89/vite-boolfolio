<template>


  <SidebarComponent />
  <MainComponent />
  


</template>

<script>
  import SidebarComponent from './components/SidebarComponent.vue';
  import MainComponent from './components/MainComponent.vue';
  import { store } from './store.js';
  import axios from 'axios';
  export default {
    name: 'App',
    components: {
      SidebarComponent,
      MainComponent,
    },
    data() {
      return {
        store,

      }
    },
    methods: {
      getTechnologies() {
        
        axios
          .get(this.store.apiBaseUrl + "/technologies")
          .then((res) => {
          
            this.store.technologies = res.data.results;

            
            //console.log(res.data);
          });
      },

    },
    mounted() {
      this.getTechnologies()
   


    },

  }
</script>

<style lang="scss" scoped></style>