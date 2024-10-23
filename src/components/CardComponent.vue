<template>

    <div class="card p-0 w-75">
        <img class="card-img-top img-fluid" :src="getImg" :alt="item.title" />
        <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text text-truncate"></p>
            <span v-for="(item, index) in item.technologies" class="badge rounded-pill text-bg-warning me-3">{{
                item?.name }}</span>



            <router-link :to="{ name: 'project-details', params: { slug: item.slug } }"
                class="btn btn-primary">View</router-link>
        </div>
    </div>

</template>

<script>
    import { store } from '../store.js';
    export default {
        name: 'CardComponet',
        props: ['item'],
        data() {
            return {
                store,
            }
        },
        computed: {
            getImg() {
                // Verifica se l'item ha immagini e se il primo elemento esiste
                const firstImage = this.item.images && this.item.images.length > 0
                    ? this.item.images[0].path // Prendi la path della prima immagine
                    : null;

                // Se c'è un'immagine, compone il percorso completo
                return firstImage
                    ? this.store.imgBaseUrl + firstImage
                    : '/images/bar-neon.png'; // Se non ci sono immagini, usa l'immagine di fallback
            }
        },

    }
</script>

<style lang="scss" scoped></style>