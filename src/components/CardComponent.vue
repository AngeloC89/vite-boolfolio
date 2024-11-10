<template>
    <div class="card p-0 w-100">
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

        &:hover {
            border: 3px double rgb(36, 43, 255);
        }

        &:hover h5 {
            color: rgb(36, 43, 255);
        }
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


</style>
