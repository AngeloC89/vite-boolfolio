<template>


  <HeaderComponent />
  <MainComponent />
 

  <i class="fa fa-solid fa-home"></i>
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
    methods: {
      getAllProjects() {
        axios
          .get(this.store.apiBaseUrl + '/projects')
          .then((res) => {
            this.projects = res.data.results

            //console.log(res.data)
          })
      }
    },
    mounted() {
      this.getAllProjects()
      console.log(this.store.imgBaseUrl)
    },
  }
</script>

<style lang="scss" scoped>

</style>