<template>
    <main class="container">
       <router-view></router-view>
    </main>
</template>

<script>
import { store } from '../store.js';
import axios from 'axios';
export default {
    name: 'MainComponent',  
data() {
      return {
        store,
        projects: []
      }
    },
    methods: {
    

    getCategories() {
              axios.get('http://127.0.0.1:8000/api/technologies').then((res) => {
                  console.log(res.data);
                  this.store.technologies = res.data.results;
                  
              });
          },
  },
  mounted() {
    this.getCategories()
    console.log(this.store.technologies);
    
    
  },
}
</script>

<style lang="scss" scoped></style>