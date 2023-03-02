<template>
    <div>
        <h1>All todos</h1>
        <button @click="newTodo()">New Todo</button>
        <br>
        <input type="text" placeholder="Author" v-model="newAuthorItem">
        <span> Test: {{ newAuthorItem }} </span>
        <br>
        <input type="text" placeholder="Todo" v-model="newTodoItem">
        <span> Test: {{ newTodoItem }} </span>

        <div v-for="todo in todos" :key="todo._id">
            <router-link :to="`/todo/${todo._id}`"> <!-- zie de `` inplaats van '' -->
                <h4>
                    {{ todo.author }}
                </h4>
                <p>
                    {{ todo.todo }}
                </p>
                <button @click="editTodo(todo._id)">edit Todo</button>
            </router-link>
            <button @click="deleteTodo(todo._id)">delete Todo</button>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed, onMounted} from 'vue';
    import { useTodoStore } from '../stores/counter.js';

    const store = useTodoStore();
    const newAuthorItem = ref('')
    const newTodoItem = ref('')

    onMounted(() => {
        store.getTodos();
    });

    const todos = computed(() => {
        return store.todos;
    });

    const newTodo = async () => {
        const author = newAuthorItem.value;
        const todo = newTodoItem.value;

        const newTodo = await store.newTodo({ author, todo });
        return { newTodo };
    };
</script>

<!-- <script>

import { useTodoStore } from '../stores/counter.js';

export default {
    name: 'App',
    mounted() {
        const store = useTodoStore();
        store.getTodos();
    },
    computed: {
        todos() {
            const store = useTodoStore();
            return store.todos;
        },
    },
    components: {},
    methods: {
        newTodo: function() {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // 'auth-token': 'state.token' kan je toevoege lol
                },
                body: JSON.stringify({
                    author: this.newAuthor,
                    todo: this.newTodoItem
                })
            }
            fetch('http://localhost:8080/todos/new',
            requestOptions)
        },
        deleteTodo: function(_id) {
            fetch('http://localhost:8080/todos/delete/' + _id, 
            { method: 'DELETE'})
            .then(() => { })
        },
        editTodo: function(_id) {
            fetch('http://localhost:8080/todos/put/' + _id, 
            { method: 'PUT'})
            .then(() => { })
        }
    }
}
</script> -->

<style scoped>
</style>