<template>
    <header>
        <nav class="d-flex">
            <div id="logo">
                <img src="/images/boolpress.png" alt="Logo">
            </div>
            <ul class="d-flex">
                <li v-for="(item, index) in menuItems" :key="index" class="mx-3 list-unstyled">
                    <router-link :to="{ name: item.name }" class="nav-link" active-class="active">
                        {{ item.label }}
                    </router-link>
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