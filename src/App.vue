<template>


  <HeaderComponent />
  <MainComponent />
  <button @click="console.log(this.store.technologies)">pigia</button>
 


</template>

<script>
  import HeaderComponent from './components/HeaderComponent.vue';
  import MainComponent from './components/MainComponent.vue';
  import { store } from './store.js';
  import axios from 'axios';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent,
    },
    data() {
      return {
        store,
        projects: []
      }
    },
    
  }
</script>

<style lang="scss" scoped>

</style>