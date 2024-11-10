<template>
    <div class="container">
        <div class="text-center my-3">
            <h1>//{{ this.nam }}</h1>
        </div>
        <div id="profile_home">
            <div id="circle_img"></div>
            <div>
                <img src="/images/Angelo.png" alt="Angelo">
            </div>
            
        </div>

        <div id="about_me">
            <p>Ciao! Mi chiamo Angelo Ciulla, e il mio percorso nella programmazione è nato dalla mia forte curiosità per la tecnologia e dalla volontà di trasformare la mia passione in una professione. Dopo anni passati come autista di mezzi pesanti, ho deciso di fare un cambiamento di carriera per conciliare la mia attrazione verso il mondo digitale con il mio lavoro. Ho quindi intrapreso un percorso formativo intensivo presso Boolean, un bootcamp che mi ha permesso di sviluppare competenze tecniche solide e concrete.
                <br> <br>
                Durante il bootcamp, ho avuto modo di approfondire una vasta gamma di tecnologie, tra cui HTML, CSS, JavaScript, Bootstrap, Node.js, Vue.js, PHP, MySQL e Laravel, con una particolare passione per lo sviluppo front-end. Ho appreso come creare interfacce utente intuitive e responsive, tenendo sempre a mente l'importanza di offrire un'esperienza ottimale all'utente. Tuttavia, in qualità di full stack developer, non mi limito al solo front-end: amo cimentarmi nella creazione di API in PHP, sviluppando logiche back-end solide per gestire i dati e le funzionalità delle applicazioni.
                <br> <br>
                
                Il mio portfolio è attualmente in fase di sviluppo, e ho intenzione di migliorarlo continuamente, aggiungendo funzionalità, ottimizzando l'interfaccia e sperimentando nuovi approcci di design per renderlo sempre più completo e accattivante. Ogni progetto su cui lavoro rappresenta per me un'opportunità di apprendere qualcosa di nuovo e di sfidare i miei limiti tecnici. Nel corso della mia formazione, ho avuto modo di mettere in pratica le competenze acquisite in oltre 70 progetti, affrontando sfide che mi hanno permesso di migliorare sia come sviluppatore che come problem solver.
                <br> <br>
                Il mio obiettivo è entrare nel mondo dello sviluppo di applicazioni aziendali e gestionali, dove credo di poter dare un contributo significativo grazie alla mia formazione, alla mia determinazione e alla mia propensione per l'apprendimento continuo. Sono convinto che il mix tra competenze front-end e back-end, unite alla mia curiosità per la tecnologia, mi renda un candidato versatile e pronto a collaborare con un team per realizzare progetti innovativi ed efficaci.
                <br> <br>
                Se siete alla ricerca di un Junior Developer motivato e desideroso di crescere in un ambiente dinamico, sarò felice di condividere con voi il mio percorso e di mettere a frutto le mie capacità per contribuire al successo dei vostri progetti.</p>

        </div>
    </div>
</template>

<script>
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

h1 {
    font-size: 4rem;
}

    #profile_home {

        padding: 10px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    



        #circle_img {
            padding: 10px;
            width: 320px;
            border-radius: 50%;
            border-top: 5px solid rgb(28, 23, 110);
            border-bottom: 5px solid rgb(28, 23, 110);
            aspect-ratio: 1;
            animation: rotateImage 5s linear infinite;
            position: absolute;
            left: 488px;
            

        }

        img {
            border-radius: 50%;
            width: 300px;
            ;

        }
    }

    p {
        font-size: 2rem;
        font-family: 'Courier New', Courier, monospace;
        margin: 40px 0px;
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
</style>