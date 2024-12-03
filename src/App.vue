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


     

    },
    mounted() {
      this.store.methods.getAllProjects();
      this.store.methods.getTechnologies();

    },
    

  }
</script>

<style lang="scss" scoped></style>