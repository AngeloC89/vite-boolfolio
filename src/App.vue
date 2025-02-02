<template>


  <SidebarComponent />
  <MainComponent />
  


</template>

<script>
  import MainComponent from './components/MainComponent.vue';
  import { store } from './store.js';
  import axios from 'axios';
  export default {
    name: 'App',
    components: {
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