<template>
    <div class="center">
        <h2>Login to your account</h2>
        <form @submit.prevent="login">
            <input type="email" title="email" placeholder="e-mail" v-model="email" />
            <input type="password" title="password" placeholder="password" v-model="password" />
            <p v-if="errMsg">{{ errMsg }}</p>
            <a class="forgot" href="#">Forgot Username?</a>
            <button type="submit" class="btn">Login</button>
            <button @click="signInWithGoogle" class="btn">Login with google</button>
        </form>
        <router-link to="/register">new? register</router-link>
        <router-link to="/todos">naar dodo</router-link>
        <!-- <router-link to="/">terug</router-link> -->
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'vue-router';
const email = ref('');
const password = ref('');
const errMsg = ref();
const router = useRouter();

const login = async () => { 
    console.log('login button clicked');
    try {
        const userCredential = await signInWithEmailAndPassword(getAuth(), email.value, password.value);
        console.log('login successfully', userCredential.user);
        router.push('/todos');
    } catch (error) {
        console.log('error:', error);
        switch (error.code) {
            case "auth/invalid-email":
                errMsg.value = "Invalid email";
                break;
            case "auth/user-not-found":
                errMsg.value = "No account for that email was found";
                break;
            case "auth/wrong-password":
                errMsg.value = "Incorrect password";
                break;
            default:
                errMsg.value = "Email or password is incorrect";
                break;
        }
    }
};

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
    .then((result) => {
        console.log(result.user);
        router.push('/todos');
    })
    .catch((error) => {
        console.log(error);
    });
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

    h2{
        font-size: 20px;
    }
}

form {
    display: flex;
    flex-direction: column;
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
