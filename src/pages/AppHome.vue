<template>
   
    <h2 class="text-center my-4">Full Stack Web Developer</h2>
    <div id="profile_home">
        <div id="circle_img"></div>
        <img src="/images/Angelo.png" alt="Angelo">
    </div>
<!-- Description of profile -->
    <div id="description_profile">
        <h3>Formazione</h3>
        <p>La mia formazione come full stack web developer ha inizio nel 2024. Dopo numerose esperienze lavorative, prima nel settore alberghiero sia in Italia che all'estero, poi come autista di mezzi pesanti al nord italia, ho deciso di intraprendere una nuova carriera come programmatore.
        </p>
        
        
        
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
            border-top: 2px solid white;
            border-bottom: 2px solid white;
            margin:auto;
            aspect-ratio: 1;
            animation: rotateImage 5s linear infinite;     
            position: absolute;     
        }

        img {
            border-radius: 50%;
            width: 300px;

        }
    }

    #description_profile {
        border: 1px solid white;
        margin-top: 50px;
        padding: 10px;
    }

    @keyframes rotateImage {
        0% {
            transform: rotate(0deg); /* Partenza da 0 gradi */
        }
        100% {
            transform: rotate(360deg); /* Fine a 360 gradi */
        }
    }
    
</style>