<template>
    <div class="container">
        <div class="text-center my-3">
            <h1>//{{ this.nam }}</h1>
        </div>
        <div id="profile_home">

            <div id="imgContainer">
                <img class="img-fluid" src="/images/Angelo.png" alt="Angelo">
                <div id="circle_img"></div>
            </div>

        </div>

        <div id="about_me">
            <p>Ciao! Mi chiamo Angelo, e il mio percorso nella programmazione è nato dalla mia forte curiosità per la
                tecnologia e dalla volontà di trasformare la mia passione in una professione. Dopo anni passati come
                autista di mezzi pesanti, ho deciso di fare un cambiamento di carriera per conciliare la mia attrazione
                verso il mondo digitale con il mio lavoro. Ho quindi intrapreso un percorso formativo intensivo presso
                Boolean, un bootcamp che mi ha permesso di sviluppare competenze tecniche solide e concrete.
                <br> <br>
                Durante il bootcamp, ho avuto modo di approfondire una vasta gamma di tecnologie, tra cui HTML, CSS,
                JavaScript, Bootstrap, Node.js, Vue.js, PHP, MySQL e Laravel, con una particolare passione per lo
                sviluppo front-end. Ho appreso come creare interfacce utente intuitive e responsive, tenendo sempre a
                mente l'importanza di offrire un'esperienza ottimale all'utente. Tuttavia, in qualità di full stack
                developer, non mi limito al solo front-end: amo cimentarmi nella creazione di API in PHP, sviluppando
                logiche back-end solide per gestire i dati e le funzionalità delle applicazioni.
                <br> <br>

                Il mio portfolio è attualmente in fase di sviluppo, e ho intenzione di migliorarlo continuamente,
                aggiungendo funzionalità, ottimizzando l'interfaccia e sperimentando nuovi approcci di design per
                renderlo sempre più completo e accattivante. Ogni progetto su cui lavoro rappresenta per me
                un'opportunità di apprendere qualcosa di nuovo e di sfidare i miei limiti tecnici. 
                <br> <br>
                Il mio obiettivo è entrare nel mondo dello sviluppo di applicazioni aziendali e gestionali, dove credo
                di poter dare un contributo significativo grazie alla mia formazione, alla mia determinazione e alla mia
                propensione per l'apprendimento continuo. 
                
                <br> <br>
                Grazie per la visita!
            </p>

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
    .container {


        h1 {
            font-size: 6rem;
        }

        #profile_home {

            padding: 10px;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;






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

        #about_me {

            p {
                height: 450px;
                overflow-y: scroll;
                font-size: 4rem;
                font-family: "Londrina Shadow", sans-serif;
                margin: 30px 0px;

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
        .container {
            padding: 5px;
            height: 100%;
            overflow: scroll;

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

            #about_me {

                p {
                    height: 50%;
                    font-family: 'Courier New', Courier, monospace;
                    margin: 20px 0px;
                    font-size: 1.6rem;

                    &::-webkit-scrollbar {
                        display: none;
                    }
                }
            }
        }


    }
</style>