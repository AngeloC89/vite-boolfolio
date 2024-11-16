<template>
    <main>
       <router-view></router-view>
    </main>
</template>

<script>

import { store } from '../store.js';
import axios from 'axios';
export default {
    name: 'MainComponent',  
    components: {
      
    },
data() {
      return {
        store,
       
      }
    },
   
}
</script>


<style lang="scss" scoped>
main{
  width: 100%;
  height: 100vh;
  
 
}
</style>