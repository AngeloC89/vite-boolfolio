<template>
    <div>
        <div class="text-center my-3">
            <h1>//{{ this.nam }}</h1>
        </div>
        <div id="profile_home">
            <div id="circle_img"></div>
            <div>
                <img src="/images/Angelo.png" alt="Angelo">
            </div>
            
        </div>
    </div>
</template>

<script>
 import axios from "axios";
    export default {
        data() {
            return {
                nam: ""
            }
        },
        methods: {
      getUser() {
        axios
          .get("http://127.0.0.1:8000/api/user/1")
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
            left: 671px;
            

        }

        img {
            border-radius: 50%;
            width: 300px;
            ;

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
</style>