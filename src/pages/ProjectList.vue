<template>
    <div>
        <div class="row col-10 gap-3 m-auto">
            <div v-for="project in projects" :key="project.id" class="card" style="width: 18rem;">
                <img class="card-img-top" :src="store.imgBaseUrl + project.image" :alt="project.title">
                <div class="card-body">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <p class="card-text text-truncate">{{ project.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
import axios from 'axios';
export default {
    name: 'ProjectList',  
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
    },
  }
</script>

<style lang="scss" scoped></style>