<template>
    <div id="home" class="d-flex flex-column align-items-center">
        <nav class="navbar navbar-expand-lg bg-black position-fixed">
            <ul class="d-flex p-0 m-0">
                <li class="list-unstyled ">
                    <a href="#sectionOne">Home</a>
                </li>
                <li class="list-unstyled">
                    <a href="#projectsPage">Projects</a>
                </li>
                <li class="list-unstyled">
                    <a href="#about"> About Me</a>
                </li>
                <li class="list-unstyled">
                    <a href="#contact">Contact Me</a>
                </li>
            </ul>
        </nav>
        <div id="sectionOne" class=" pt-5">
            <h1 id="title" class="text-center neon">Welcome to my page...</h1>
            <h2 id="subtitle" class="text-center neon">I am Angelo</h2>
            <div id="welcome" class="d-flex justify-content-center w-100 gap-3">
                <div id="left">
                    <ul class="d-flex flex-column align-items-center p-0">
                        <li class="list-unstyled p-0 p-lg-3 brand">
                            <a href="https://www.linkedin.com/in/angelociulla89">
                                <i class="fa-brands fa-linkedin"></i></a>
                        </li>
                        <li class="list-unstyled p-0 p-lg-3 brand">
                            <a href="https://www.instagram.com/let_dev_il.dev/profilecard/?igsh=MXZqdnB6d3YweW50MA==">
                                <i class="fa-brands fa-instagram"></i></a>
                        </li>
                        <li class="list-unstyled p-0 p-lg-3 brand">
                            <a href="https://github.com/AngeloC89"><i class="fa-brands fa-github"></i></a>
                        </li>
                    </ul>
                </div>
                <div id="imgW" class="d-none d-lg-flex row">
                    <div class="col-4 d-flex justify-content-center align-items-center" v-for="(tecno, index) in store.tecnoList " :key="index">
                        <img class="img-fluid w-50" :src="`/images/tecnologie/` + tecno" :alt="tecno">
                    </div>

                </div>
            </div>
        </div>
        <div id="projectsPage">
            <ProjectListComponent />
        </div>
        <div id="about">
            <AboutMeComponent />
        </div>
        <div id="contact">
            <ContactMeComponent />
        </div>


    </div>


</template>

<script>
    import { store } from '../store.js';
    import AboutMeComponent from '../components/AboutMeComponent.vue';
    import ProjectListComponent from '../components/ProjectsListComponent.vue';
    import ContactMeComponent from '@/components/ContactMeComponent.vue';

    export default {
        name: 'AppHome',
        components: {
            AboutMeComponent,
            ProjectListComponent,
            ContactMeComponent
        },

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

            selectSection(section) {

            },
            animationTitle() {
                const title = document.getElementById('title');
                const subtitle = document.getElementById('subtitle');

                8
                // Imposta lo stile iniziale
                title.style.transform = "translateX(-100%)";
                subtitle.style.transform = "translateX(100%)";

                // Aggiunge la transizione
                title.style.transition = "transform 2s ease-out";
                subtitle.style.transition = "transform 2.7s ease-out";

                // Dopo un breve timeout, sposta gli elementi a posizione normale
                setTimeout(() => {
                    title.style.transform = "translateX(0%)";
                    subtitle.style.transform = "translateX(0%)";
                }, 500);
            }
        },

        mounted() {
            this.animationTitle();
        },




    }
</script>


<style lang="scss" scoped>
    .debug {
        border: 1px solid red;
    }


    #home {
        height: 100%;
        overflow: scroll;
        gap: 50px;

        &::-webkit-scrollbar {
            display: none;
        }

        nav {
            width: 100%;
            height: 50px;
            z-index: 1000;
            box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.5);

            top: 3px;
            display: flex;
            align-items: center;
            justify-content: center;

            ul {


                li {
                    margin: 0px 20px;

                    a {
                        text-decoration: none;
                        font-size: 2rem;
                        color: rgb(255, 168, 76);
                    }
                }
            }
        }

        #sectionOne {



            .neon {
                font-size: 6rem;
            }

            #welcome {
                margin: 100px 0px;

                #left {


                    .brand {
                        font-size: 4rem;

                        a {
                            color: black;
                        }
                    }

                }

                #left,
                #imgW {
                    width: 40%;
                    background: rgba(167, 167, 167, 0.2);
                    border-radius: 16px;
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                    backdrop-filter: blur(15px);
                    -webkit-backdrop-filter: blur(15px);
                    border: 1px solid rgba(128, 128, 128, 0.185);

                }

            }


            #imgW {
             
            }


        }

        #about,
        #projectsPage,
        #sectionOne,
        #contact {

            width: 100%;
            padding: 20px 0px;
        }


    }


    @media screen and (max-width: 576px) {
        #home {

            nav {
                border: none;
                border-radius: 0px;
                width: 100%;
                height: 40px;
                top: 0px;

                ul {
                    li {
                        padding: 0px 10px;
                        margin: 0px;
                        border-right: 1px solid white;

                        &:first-child {
                            border-left: 1px solid white;
                        }

                        a {
                            font-size: 1rem;
                        }
                    }
                }
            }

            #sectionOne {
                .neon {
                    font-size: 4rem;
                }

            }


        }


        #projectsList {
            width: 100%;
            font-size: 4rem;

            li {

                transform: rotate(-12deg);
            }
        }
    }


</style>