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
       
      }
    },
   
}
</script>

<style lang="scss" scoped></style>