<template>
    <div id="home" class="d-flex flex-column align-items-center">
        <h1 id="neon" class="text-center my-4">//Full Stack Web Developer</h1>
        <div class="d-flex justify-content-center w-100">
            <div id="left">
                <ul class="d-flex flex-column align-items-center p-0">
                    <li class="list-unstyled p-0 p-lg-3 brand">
                        <a href="https://www.linkedin.com/in/angelociulla89">
                            <i class="fa-brands fa-linkedin"></i></a></li>
                    <li class="list-unstyled p-0 p-lg-3 brand">
                        <a href="https://www.instagram.com/let_dev_il.dev/profilecard/?igsh=MXZqdnB6d3YweW50MA==">
                            <i class="fa-brands fa-instagram"></i></a></li>
                    <li class="list-unstyled p-0 p-lg-3 brand">
                        <a href="https://github.com/AngeloC89"><i class="fa-brands fa-github"></i></a></li>
                </ul>
            </div>
            <div id="imgW" class="d-none d-lg-block" :style="{ backgroundImage: `url(${immg})` }"></div>
            <div id="projectsList" class="d-none d-lg-block">
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
                immg: store.imgBaseUrl + 'images/devil+dev.webp',

            };
        },
        methods: {
            changeImg(project) {
                this.immg = this.store.imgBaseUrl + project;
                console.log(this.immg);
            },

            baseImg() {
                this.immg = store.imgBaseUrl + 'images/devil+dev.webp';
            },
        },


    }
</script>


<style lang="scss" scoped>
    #neon{
        font-size: 6rem;
    }

    #left {
        width: 25%;

        .brand {
            font-size: 4rem;

            a{
                color : black;
            }
        }
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
        width: 25%;
        height: 700px;
        overflow-y: scroll;
        overflow-x: hidden;
        font-family: "Caveat", cursive;
        font-size: 5rem;

        &::-webkit-scrollbar {
            display: none;
        }
        ul{
           

            li {
                transform: rotate(-12deg);
            }
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
        #neon {
            font-size: 2rem;
        }

        #projectsList {
            width: 100%;
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