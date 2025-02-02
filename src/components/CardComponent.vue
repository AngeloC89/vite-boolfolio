<template>
    <div class="card p-0 w-100 col-12 col-lg-3 ">
        <router-link class="text-decoration-none h-100" :to="{ name: 'project-details', params: { slug: item.slug } }">
            <!-- <img class="card-img-top img-fluid" :src="getImg" :alt="item.title" /> -->

            <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
            </div>
        </router-link>
    </div>
</template>

<script>
    import { store } from "../store.js";
    export default {
        name: "CardComponet",
        props: ["item"],
        data() {
            return {
                store,
            };
        },
        computed: {
            getImg() {
                // Verifica se l'item ha immagini e se il primo elemento esiste
                const firstImage =
                    this.item.images && this.item.images.length > 0
                        ? this.item.images[0].path // Prendi la path della prima immagine
                        : null;

                // Se c'è un'immagine, compone il percorso completo
                return firstImage ? this.store.imgBaseUrl + firstImage : "/images/bar-neon.png"; // Se non ci sono immagini, usa l'immagine di fallback
            },
        },
    };
</script>

<style lang="scss" scoped>
    .card {
        border: 3px solid rgb(22, 22, 130);
        width: calc(100% / 2);
        border-radius: 40px;
        cursor: pointer;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        border: 1px solid rgba(255, 255, 255, 0.3);

        &:hover h5 {
            color: rgb(255, 168, 76);
        }
    }

    #card {
        background: rgba(167, 167, 167, 0.2);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        border: 1px solid rgba(128, 128, 128, 0.185);
    }

    .card-body {
        padding: 10px 10px;

        display: flex;
        justify-content: center;
        align-items: center;


        h5 {
            color: rgb(0, 0, 0);
            font-size: 5.5rem;
            font-weight: 500;
            font-family: "Caveat", cursive;

        }

        .badge {
            font-size: 1.5rem;
            font-weight: 500;
            display: flex;
            align-items: center;
            height: fit-content;
        }
    }


    @media screen and (max-width: 576px) {

        .card{

           
    
            &:hover h5 {
                color: black;
            }
        }

        .card-body {
            padding: 10px 10px;

            display: flex;
            justify-content: center;
            align-items: center;


            h5 {
                color: rgb(0, 0, 0);
                font-size: 3rem;
                font-weight: 400;
                font-family: "Caveat", cursive;

            }

            .badge {
                font-size: 1.5rem;
                font-weight: 500;
                display: flex;
                align-items: center;
                height: fit-content;
            }
        }

    }


</style>
