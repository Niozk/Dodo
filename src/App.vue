<template>
    <router-view></router-view>
</template>

<script>

export default {
    name: 'App',
    components: {},
    data() {
        return {
        }
    },
    methods: {}
}
</script>

<style>
#app {
    min-height: 100vh;
}

body {
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(115,215,255,1) 100%);
}
</style>

<!-- <MyButton v-if="$route.path=='/login'" text="heol"/> -->

<!-- <router-link to="/login">login</router-link> -->
