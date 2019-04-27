<template>
    <div class="home">
        <router-link to="/keitai/mail">Mail</router-link>
        <router-link to="/pokebell">Pokebell</router-link>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'home',
        components: {
            HelloWorld
        }
    }
</script>
