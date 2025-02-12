<template>
    <div class="row p-0 m-0 d-flex justify-content-center align-items-center flex-column">
       
        <h2 class="text-center display-1 border-bottom p-0">{{ techName }}</h2>
        <router-link class="text-decoration-none btn my-4" :to="{ name: 'home' }"><i class="fa-solid fa-arrow-left fs-1"> Go back</i></router-link>
        <div v-if="store.projects.length > 0" class="col-12 col-lg-3 my-4 m-lg-3" v-for="(project, index) in store.projects" :key="project.id">
            <CardComponent :item="project" :index="index" />
        </div>
        <div v-else-if="noProjects" class="my-4"> <h3 class="text-center">
            Al momento non ci sono progetti con questa tecnologia
        </h3></div>
       
    </div>
</template>

<script>

    import { useRouter} from "vue-router";

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
                router: useRouter(),
                noProjects: false

            }
        },

        methods: {
            nameFunction() {
                for (let i = 0; i < store.technologies.length; i++) {
                    if (store.technologies[i].id == this.id) {
                        this.techName = store.technologies[i].name;
                    }
                }
            },

            errorFindId() {
                if (this.id > store.technologies.length) {
                    this.router.replace({ name: 'not-found' })
                }
            }
        },

        mounted() {

            this.store.params.technologies = this.id;
            this.store.methods.getAllProjects();
            watch(
                () => store.technologies,
                (newVal) => {
                    if (newVal.length > 0) {
                        this.nameFunction();
                        this.errorFindId();
                    }
                },
                { deep: true, immediate: true }
            );

            setTimeout(() => {
                this.noProjects = true;
            }, 2000);


        }
    };
</script>




<style lang="scss" scoped></style>