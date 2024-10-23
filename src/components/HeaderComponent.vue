<template>
    <header>
        <nav class="d-flex align-items-center">
            <div id="logo">
                <h1>{{ this.nam }}</h1>
            </div>
            <ul class="d-flex align-items-center my-auto">
                <li v-for="(item, index) in menuItems" :key="index" class="mx-3 list-unstyled">
                    <router-link :to="{ name: item.name }" class="nav-link" active-class="active">
                        {{ item.label }}
                    </router-link>
                </li>
            </ul>
            <!-- <ul class="ms-auto">
                <li class="mx-3 list-unstyled">
                    <a href="http://127.0.0.1:8000/" class="nav-link">Area riservata</a>
                </li>
            </ul> -->
        </nav>
    </header>
</template>

<script>
    import axios from 'axios';


    export default {
        name: 'HeaderComponent',
        data() {
            return {
                menuItems: [
                    {
                        name: 'home',
                        label: 'Profile'
                    },
                    {
                        name: 'projects',
                        label: 'Projects'
                    },
                    // {
                    //     name: 'contact',
                    //     label: 'Contact'
                    // }

                ],

                nam: '',

            }
        },
        methods: {
            getUser() {
                axios.get('http://127.0.0.1:8000/api/user/1')
                    .then(response => {
                        this.nam = response.data.name
                        console.log('Nome dell\'utente:', response.data.name);
                    })
                    .catch(error => {
                        console.error('Errore durante il recupero del nome:', error);
                    });
            }
        },
        mounted() {
            this.getUser();
            console.log(this.nam);
        }
    }
</script>

<style lang="scss" scoped>

    header {

        background-color: rgba(35, 7, 66, 0.94);
        nav {
            padding: 15px;

            h1{
                color: white;
            }
            li{
                color: white;}
        }
    }


</style>