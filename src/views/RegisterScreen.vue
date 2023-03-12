<template>
    <div class="center">
        <h2>Register your account</h2>
        <form @submit.prevent="register">
            <input type="email" title="email" placeholder="e-mail" v-model="email" />
            <input type="password" title="password" placeholder="password" v-model="password" />
            <button type="submit" class="btn">Register</button>
        </form>
        <router-link to="/login">naar login screen</router-link>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
const email = ref('');
const password = ref('');
const router = useRouter();

const register = async () => { 
    console.log('register button clicked');
    try {
        const userCredential = await createUserWithEmailAndPassword(getAuth(), email.value, password.value);
        console.log('registered successfully', userCredential.user);
        router.push('/todos');
    } catch (error) {
        console.log('error:', error);
    }
};

const signInWithGoogle = () => {

};
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

    h2 {
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
</style>
