<template>
    <div class="card p-0">
        <router-link class="text-decoration-none" :to="{ name: 'project-details', params: { slug: item.slug } }">
            <img class="card-img-top img-fluid" :src="getImg" :alt="item.title" />

            <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <span v-for="(item, index) in item.technologies" class="badge rounded-pill text-bg-warning me-3">{{
                    item?.name }}</span>
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
        border: 3px solid rgb(66, 3, 67);
        width: calc(100% / 2);

        &:hover {
            border: 3px double rgb(251, 0, 255);
        }

        &:hover h5 {
            color: rgb(251, 0, 255);
        }
    }

    .card-body {
        padding: 10px 10px;
        border-top: 1px solid black;

        h5 {
            color: rgb(66, 3, 67);

        }
    }


</style>
