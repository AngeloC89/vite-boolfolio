<template>

    <div class="card p-0 w-75">
        <img class="card-img-top img-fluid" :src="getImg" :alt="item.title" />
        <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text text-truncate">{{ item.content }}</p>
            <p>{{ item.technologies?.name }}</p>
            


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
                return this.item.image ? this.store.imgBaseUrl + this.item.image : '/images/bar-neon.png';
            },
        }

    }
</script>

<style lang="scss" scoped></style>