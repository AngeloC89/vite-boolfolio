<template>
    <div class="row d-flex justify-content-center align-items-center flex-column">
        <h2 class="text-center display-1 border-bottom">{{ $route.params.name }}</h2>
        <div class="col-12 col-lg-3 m-3" v-for="(project, index) in store.projects" :key="project.id">
            <CardComponent :item="project" :index="index" />
        </div>
    </div>
</template>

<script>
    import { store } from '../store.js';
    import CardComponent from '../components/CardComponent.vue';
    export default {
        name: 'iconProject',
        components: {
            CardComponent
        },
        data() {
            return {
                store,
                id: this.$route.params.id
                
            }
        },

        mounted() {
            this.store.iconId = this.id;
            this.store.params.technologies = this.store.iconId;
            console.log(this.store.iconId);
            this.store.methods.getAllProjects();
            
        }
    };
</script>

<style lang="scss" scoped></style>