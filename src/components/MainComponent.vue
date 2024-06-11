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
data() {
      return {
        store,
        projects: []
      }
    },
}
</script>

<style lang="scss" scoped></style>