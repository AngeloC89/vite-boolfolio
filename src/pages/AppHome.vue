<template>
    <div id="home" class="container d-flex flex-column align-items-center">
        <h1 id="neon" class="text-center my-4">//Full Stack Web Developer</h1>
        <div id="imgW"></div>
    </div>


</template>

<script>
    export default {
        name: 'AppHome',
        data() {
            return {

            }
        },
        methods: {

        }

    }
</script>


<style lang="scss" scoped>
    #imgW {
        background-image: url('/public/images/devil.webp');
        opacity: 0.6;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        height: 700px;
        width: 700px;
        border-radius: 50%;
        box-shadow: 45px 35px 88px 28px rgba(0, 0, 0, 0.8), inset 0 0 120px 32px rgba(0, 0, 0, 0.9);

    }


</style>