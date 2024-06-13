<template>
    <header>
        <nav class="d-flex align-items-center">
            <div id="logo">
                <img src="/images/boolpress.png" alt="Logo">
            </div>
            <ul class="d-flex align-items-center">
                <li v-for="(item, index) in menuItems" :key="index" class="mx-3 list-unstyled">
                    <router-link :to="{ name: item.name }" class="nav-link" active-class="active">
                        {{ item.label }}
                    </router-link>
                </li>
            </ul>
            <ul class="ms-auto">
                <li class="mx-3 list-unstyled">
                    <a href="http://127.0.0.1:8000/" class="nav-link">Area riservata</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>

    export default {
        name: 'HeaderComponent',
        data() {
            return {
                menuItems: [
                    {
                        name: 'home',
                        label: 'Home'
                    },
                    {
                        name: 'projects',
                        label: 'Projects'
                    },
                    {
                        name: 'contact',
                        label: 'Contact'
                    }

                ]
                
            }
        }
    }
</script>

<style lang="scss" scoped>

    header {
        nav {
            padding: 15px;

            img {
                width: 300px;
            }
        }

    }


</style>