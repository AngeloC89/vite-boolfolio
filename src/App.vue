<template>


  <HeaderComponent />
  <MainComponent />
  


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