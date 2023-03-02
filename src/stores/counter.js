import axios from 'axios';
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('store', {
    state: () => ({
        todos: [],
    }),
    actions: {
        async getTodos() {
            try {
                const response = await axios.get('http://localhost:8080/todos');
                const todos = response.data.map(item => ({
                    id: item.id,
                    author: item.author,
                    todo: item.todo,
                }));
                this.todos = todos;
            } catch (error) {
                console.error(error);
            }
        },
        async newTodo({ author, todo }) {
            try {
                const response = await axios.post('http://localhost:8080/todos/new', {
                    author,
                    todo,
                });
                return response.data;
            } catch (error) {
                console.error(error);
                return null;
            }
        },
    },
})