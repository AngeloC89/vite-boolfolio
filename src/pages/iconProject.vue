<template>
    <div class="row p-0 m-0 d-flex justify-content-center align-items-center flex-column">
        <h2 class="text-center display-1 border-bottom p-0">{{ techName }}</h2>
        <div class="col-12 col-lg-3 my-4 m-lg-3" v-for="(project, index) in store.projects" :key="project.id">
            <CardComponent :item="project" :index="index" />
        </div>
    </div>
</template>

<script>
    import { store } from '../store.js';
    import CardComponent from '../components/CardComponent.vue';
    import { watch } from 'vue';
    export default {
        name: 'iconProject',
        components: {
            CardComponent
        },
        data() {
            return {
                store,
                id: this.$route.params.id,
                techName: "",

            }
        },

        methods: {
            nameFunction() {
                for (let i = 0; i < store.technologies.length; i++) {
                    console.log(store.technologies[i].id);
                    if (store.technologies[i].id == this.id) {
                        this.techName = store.technologies[i].name;
                        console.log('ciao');
                    }
                }
            }
        },

        mounted() {
            this.store.methods.getTechnologies();
            this.store.iconId = this.id;
            this.store.params.technologies = this.store.iconId;
            this.store.methods.getAllProjects();
            watch(
                () => store.technologies,
                (newVal) => {
                    if (newVal.length > 0) {
                        this.nameFunction();
                    }
                },
                { deep: true, immediate: true }
            );


            // Recuperiamo il nome dallo store basandoci sull'ID


        }
    };
</script>




<style lang="scss" scoped>


    @media screen and (max-width: 576px) {}


</style>