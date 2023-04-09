<template>
    <div>
        <h1>Editing a ToDo</h1>
        <input type="text" placeholder="Author" v-model="newAuthorItem">
        <span> Test: {{ newAuthorItem }} </span>
        <br>
        <input type="text" placeholder="Todo" v-model="newTodoItem">
        <span> Test: {{ newTodoItem }} </span>
        <br>
        <button v-on:click="updateTodo(currentTodo.id)">update Todo</button>
        <br><br>

        <h4>
            {{ currentTodo.author }}
        </h4>
        <p>
            {{ currentTodo.todo }}
        </p>
    </div>
</template>

<script setup>
    import { ref, computed} from 'vue';
    import { useTodoStore } from '../stores/counter.js';

    const store = useTodoStore();
    const newAuthorItem = ref('')
    const newTodoItem = ref('')

    const currentTodo = computed(() => {
        return store.currentTodo;
    });

    const updateTodo = async (id) => {
        const author = newAuthorItem.value;
        const todo = newTodoItem.value;

        const updatedTodo = await store.updateTodo(id, author, todo);
        console.log('Updated Todo:', {author, todo});
        return { updatedTodo };
    };

</script>

<style scoped>
</style>