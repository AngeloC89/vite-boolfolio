<template>
    <div id="home" class="d-flex flex-column align-items-center">
        <nav class="navbar navbar-expand-lg bg-black position-fixed">
            <ul class="d-flex p-0 m-0">
                <li class="list-unstyled">
                    <a href="#sectionOne">Home</a>
                </li>
                <li class="list-unstyled">
                    <a href="#about"> About Me</a>
                </li>
                <li class="list-unstyled">
                    <a href="#contact">Contact Me</a>
                </li>
            </ul>
        </nav>

        <div id="sectionOne">
            <div class="overflow-hidden">
                <h1 id="title" class="text-center neon">Welcome to my page...</h1>
                <h2 id="subtitle" class="text-center neon">I am Angelo</h2>
            </div>
            <div id="welcome"
                class="d-flex flex-column flex-lg-row justify-content-center align-items-center w-100 gap-3">
                <div id="left" class="glass p-2">
                    <h3>Social</h3>
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
                <div id="imgW" class="d-flex row glass p-2">
                    <h3 class="p-0">Projects</h3>
                    <div class="col-6 col-lg-4 d-flex justify-content-center align-items-center"
                        v-for="(tecno, index) in store.technologies" :key="tecno.id">
                        <router-link id="icon" class="d-flex justify-content-center align-items-center"
                            @click="setParams(tecno.id)" :to="{ name: 'iconProject', params: { id: tecno.id } }">
                            <img class="" :src="`/images/tecnologie/` + tecno.name + `.png`"
                                :alt="tecno.name" />
                        </router-link>
                    </div>
                </div>
            </div>
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
    import { store } from "../store.js";
    import AboutMeComponent from "../components/AboutMeComponent.vue";
    import ContactMeComponent from "@/components/ContactMeComponent.vue";
   

    export default {
        name: "AppHome",
        components: {
            AboutMeComponent,
            ContactMeComponent,
        },

        data() {
            return {
                store,
                
            };
        },
        methods: {
            animationTitle() {
                const title = document.getElementById("title");
                const subtitle = document.getElementById("subtitle");

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
            },

            setParams(techno) {
                this.store.params = {};
                this.store.iconId = techno;
                if (techno) {
                    this.store.params.technologies = techno;
                }
                store.methods.getAllProjects();


            },
        },

        mounted() {
            this.store.projects = [];
            this.animationTitle();
            this.store.methods.getTechnologies();
        }
    };
</script>

<style lang="scss" scoped>
    #home {
        height: 100%;
        overflow: scroll;
        gap: 50px;

        &::-webkit-scrollbar {
            display: none;
        }

        nav {
            width: 100%;
            height: 60px;
            z-index: 1000;
            box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.5);

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
            padding-top: 130px;
            width: 100%;

            .neon {
                font-size: 6rem;
            }

            #welcome {
                margin: 100px 0px;

                #left {
                    width: 40%;
                    aspect-ratio: 16/4;

                    .brand {
                        font-size: 4rem;

                        a {
                            color: black;
                        }
                    }
                }

                #imgW {
                    width: 40%;
                    aspect-ratio: 16/4;

                    #icon {
                        padding: 50px;

                        img {
                            width: 6.25rem;
                        }
                    }
                }
            }
        }

        #about,
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

                #welcome {

                    #left,
                    #imgW {
                        width: 80%;

                        #icon {
                            padding: 20px;

                            img {
                                width: 100%;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
