<template>
    <main class="container">
     <div v-if="!store.loader">
       <router-view></router-view>
      </div>
      <div v-else> 
       <LoaderComponent v-if="store.loader" class="d-block mx-auto" />
      </div>
    </main>
</template>

<script>
import LoaderComponent from '@/pages/LoaderComponent.vue';
import { store } from '../store.js';
import axios from 'axios';
export default {
    name: 'MainComponent',  
    components: {
      LoaderComponent,
    },
data() {
      return {
        store,
       
      }
    },
   
}
</script>

<style lang="scss" scoped></style>