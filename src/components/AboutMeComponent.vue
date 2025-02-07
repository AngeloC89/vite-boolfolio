<template>
    <div id="aboutMe" class="p-3">
        <div class="my-3">
            <h1>//About Me</h1>
        </div>
        <div class="d-block d-lg-flex glass">
            <div id="profile_home">
                <div id="imgContainer">
                    <img class="img-fluid" src="/images/Angelo.png" alt="Angelo">
                    <div id="circle_img"></div>
                </div>
            </div>
            <div id="description">
                <p>Ciao! Mi chiamo Angelo, e il mio percorso nella programmazione è nato dalla mia forte curiosità per
                    la
                    tecnologia e dalla volontà di trasformare la mia passione in una professione. Dopo anni passati come
                    autista di mezzi pesanti, ho deciso di fare un cambiamento di carriera per conciliare la mia
                    attrazione
                    verso il mondo digitale con il mio lavoro. Ho quindi intrapreso un percorso formativo intensivo
                    presso
                    Boolean, un bootcamp che mi ha permesso di sviluppare competenze tecniche solide e concrete.
                    <br> <br>
                    Durante il bootcamp, ho avuto modo di approfondire una vasta gamma di tecnologie, tra cui HTML, CSS,
                    JavaScript, Bootstrap, Node.js, Vue.js, PHP, MySQL e Laravel, con una particolare passione per lo
                    sviluppo front-end. Ho appreso come creare interfacce utente intuitive e responsive, tenendo sempre
                    a
                    mente l'importanza di offrire un'esperienza ottimale all'utente. Tuttavia, in qualità di full stack
                    developer, non mi limito al solo front-end: amo cimentarmi nella creazione di API in PHP,
                    sviluppando
                    logiche back-end solide per gestire i dati e le funzionalità delle applicazioni.
                    <br> <br>

                    Il mio portfolio è attualmente in fase di sviluppo, e ho intenzione di migliorarlo continuamente,
                    aggiungendo funzionalità, ottimizzando l'interfaccia e sperimentando nuovi approcci di design per
                    renderlo sempre più completo e accattivante. Ogni progetto su cui lavoro rappresenta per me
                    un'opportunità di apprendere qualcosa di nuovo e di sfidare i miei limiti tecnici.
                    <br> <br>
                    Il mio obiettivo è entrare nel mondo dello sviluppo di applicazioni aziendali e gestionali, dove
                    credo
                    di poter dare un contributo significativo grazie alla mia formazione, alla mia determinazione e alla
                    mia
                    propensione per l'apprendimento continuo.

                    <br> <br>
                    Grazie per la visita!
                </p>

            </div>
        </div>
    </div>

</template>

<script>
    import { store } from '../store.js';
    import axios from "axios";
    export default {
        data() {
            return {
                store,
                nam: ""
            }
        },
        methods: {
            getUser() {
                axios
                    .get(this.store.apiBaseUrl + "/user/1")
                    .then((response) => {
                        this.nam = response.data.name;
                        console.log("Nome dell'utente:", response.data.name);
                    })
                    .catch((error) => {
                        console.error("Errore durante il recupero del nome:", error);
                    });
            },
        },
        mounted() {
            this.getUser();
            console.log(this.nam);
        },

    }
</script>

<style lang="scss" scoped>
    .debug {
        border: 1px solid red;
    }

    #aboutMe {
        height: 100%;
        //overflow: hidden;



        h1 {
            font-size: 6rem;
        }

        #profile_home {

            padding: 10px;
            position: relative;
            display: flex;
            flex-direction: column;


            #imgContainer {
                display: flex;
                width: 320px;
                height: 320px;
                position: relative;

                img {
                    width: 320px;
                    position: absolute;
                    left: 0px;
                    border-radius: 50%;

                }


                #circle_img {
                    width: 320px;
                    aspect-ratio: 1;
                    /* Deve essere uguale a width per creare un cerchio */
                    border-radius: 50%;
                    border-top: 5px solid rgb(28, 23, 110);
                    border-bottom: 5px solid rgb(28, 23, 110);
                    animation: rotateImage 5s linear infinite;
                    position: absolute;
                    left: 0px;

                }
            }
        }

        #description {

            p {
                font-size: 2rem;
                font-family: "Sour Gummy", serif;
                margin: 20px 0px;
                color: rgb(169, 169, 169);

                &::-webkit-scrollbar {
                    display: none;
                }
            }
        }
    }

    @keyframes rotateImage {
        0% {
            transform: rotate(0deg);
            /* Partenza da 0 gradi */
        }

        100% {
            transform: rotate(360deg);
            /* Fine a 360 gradi */
        }
    }


    @media screen and (max-width: 576px) {




        #aboutMe {
          

            h1 {
                font-size: 3rem
            }

            #profile_home {

                #circle_img {
                    padding: 10px;
                    width: 320px;
                    border-radius: 50%;
                    border-top: 5px solid rgb(28, 23, 110);
                    border-bottom: 5px solid rgb(28, 23, 110);
                    aspect-ratio: 1;
                    animation: rotateImage 5s linear infinite;
                    position: absolute;
                    left: 32px;


                }

                img {
                    border-radius: 50%;
                    width: 300px;
                    ;

                }


            }

            #description {
                padding: 5px;
            

                p {
                    font-size: 1rem;

                    &::-webkit-scrollbar {
                        display: none;
                    }
                }
            }


        }
    }

</style>