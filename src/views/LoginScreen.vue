<template>
    <div class="center">
        <h2>Login to your account</h2>
        <form>
            <input type="text" title="username" placeholder="username" />
            <input type="password" title="password" placeholder="password" />
            <button type="submit" class="btn">Login</button>
            <a class="forgot" href="#">Forgot Username?</a>
        </form>
        <router-link to="/register">new? register</router-link>
        <router-link to="/todos">naar doodoo</router-link>
        <!-- <router-link to="/">terug</router-link> -->
    </div>
</template>

<script>
    // import TestButton from '../components/TestButton.vue';  <----- Een comment omdat ik (Sardar) was vergeten hoe ik moest importen "lol".
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

<style scoped>
* {
    font-family: Arial, Helvetica, sans-serif;
}

.center {
    display: grid;
    place-items: center;
    margin: 10% 30% 0;
    border: 1px solid black;
    background-color: white;
}

@media(max-width: 820px) {
    .center {
        margin: 10% 20% 0;
    }
}

@media(max-width: 620px) {
    .center {
        margin: 10% 10% 0;
    }

    h2{
        font-size: 20px;
    }
}

form {
    margin-top: -20px;
    padding: 10px;
}

form input {
    display: block;
    margin: 20px;
    padding: 7px;
}

.btn {
    display: block;
    margin: 20px;
    padding: 4px 72px 4px;
}

.forgot {
    display: block;
    margin: 20px;
    text-align: center;
}

</style>
