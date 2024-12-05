<template>
    <div id="home" class="d-flex flex-column align-items-center">
        <h1 id="neon" class="text-center my-4 fs-1">//Full Stack Web Developer</h1>
        <div class="d-flex justify-content-center w-100">
            <div id="left" class="d-none d-lg-block"></div>
            <div id="imgW" class="d-none d-lg-block" :style="{ backgroundImage: `url(${immg})` }"></div>
            <div id="projectsList" class="w-lg-25">
                <ul class="p-0">
                    <li v-for="(project, index) in store.projects" :key="project.id"
                        class="text-center list-unstyled p-0 p-lg-3 ">
                        <router-link @mouseleave="baseImg()" @mouseover="changeImg(project.images[0].path)"
                            id="linkHome" class="text-decoration-none"
                            :to="{ name: 'project-details', params: { slug: project.slug } }">
                            {{ project.title }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>

    </div>


</template>

<script>
    import { store } from '../store.js';

    export default {
        name: 'AppHome',

        data() {
            return {
                store,
                immg: '/public/images/devil.webp',

            };
        },
        methods: {
            changeImg(project) {
                this.immg = this.store.imgBaseUrl + project;
                console.log(this.immg);
            },

            baseImg() {
                this.immg = '/public/images/devil.webp';
            },
        },


    }
</script>


<style lang="scss" scoped>

    #left {
        width: 25%;
    }

    #imgW {
        //background-image: url('/public/images/devil.webp');
        opacity: 0.6;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        width: 700px;
        height: 700px;
        border-radius: 50%;
        box-shadow: 45px 35px 88px 28px rgba(0, 0, 0, 0.8), inset 0 0 120px 32px rgba(0, 0, 0, 0.9);

    }

    #projectsList {
        //width: 25%;
        height: 700px;
        overflow-y: scroll;
        font-family: "Caveat", cursive;
        font-size: 5rem;

        li {
           
            transform: rotate(-12deg);
        }



        #linkHome {
            color: black;
            cursor: pointer;


            &:hover {
                color: rgb(36, 43, 2555);

            }

        }
    }

    @media screen and (max-width: 576px) {

        #projectsList {
            font-size: 4rem;

            li {

                transform: rotate(-12deg);
            }



            #linkHome {
                color: black;
                cursor: pointer;


                &:hover {
                    color: rgb(36, 43, 2555);

                }

            }
        }

    }


</style>