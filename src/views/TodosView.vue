<template>
    <div>
        <h1>All todos</h1>
        <button @click="newTodo()">New Todo</button>
        <br>
        <input type="text" placeholder="Author" v-model="this.newAuthor">
        <span> Test: {{ newAuthor }} </span>
        <br>
        <input type="text" placeholder="Todo" v-model="this.newTodoItem">
        <span> Test: {{ newTodoItem }} </span>

        <div v-for="todo in todoItems" :key="todo._id">
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

<script>
export default {
    name: 'App',
    data() {
        return {
            newAuthor: '',
            newTodoItem: '',
            todoItems: []
        }
    },
    mounted() {
        this.getAll()
    },
    components: {},
    methods: {
        getAll: function() {
            fetch('http://localhost:8080/todos')
            .then(res => res.json())
            .then(data => this.todoItems = data)
            .catch(err => console.log(err.message))
        },
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
</script>

<style scoped>




</style>