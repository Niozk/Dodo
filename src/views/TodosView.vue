<template>
    <div>
        <h1>All todos</h1>
        <!-- <button @click="logOut()">log out</button> -->
        <button @click="newTodo()">New Todo</button>
        <br>
        <input type="text" placeholder="Author" v-model="newAuthorItem">
        <span> Test: {{ newAuthorItem }} </span>
        <br>
        <input type="text" placeholder="Todo" v-model="newTodoItem">
        <span> Test: {{ newTodoItem }} </span>

        <div v-for="todo in todos" :key="todo.id">
            <h4>
                {{ todo.author }}
            </h4>
            <p>
                {{ todo.todo }}
            </p>
            <router-link :to="`/todo/${todo.id}`">
                <button v-on:click="getTodoById(todo.id)">edit Todo</button>
            </router-link>
            <button v-on:click="deleteTodo(todo.id)">delete Todo</button>
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

    const deleteTodo = async (id) => {
        store.deleteTodo(id);
    };

    const getTodoById = async (id) => {
        const todo = await store.getTodoById(id);
        store.currentTodo = todo;
    };

</script>

<style scoped>
</style>