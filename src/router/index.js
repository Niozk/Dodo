import { createRouter, createWebHistory } from 'vue-router'
import LoginScreen from '../views/LoginScreen.vue'
import RegisterScreen from '../views/RegisterScreen.vue'
import TodosView from '../views/TodosView.vue'
import TodoSingle from '../views/TodoSingle.vue'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: '/', redirect: '/login' },
		{
			path: '/login',
			name: 'LoginScreen',
			component: LoginScreen
		},
		{
			path: '/register',
			name: 'RegisterScreen',
			component: RegisterScreen
		},
		{
			path: '/todos',
			name: 'Todos',
			component: TodosView,
		},
		{
			path: '/todo/:id',
			name: 'TodoSingle',
			component: TodoSingle
		}
		// {
		//   path: '/',
		//   name: 'home',
		//   component: HomeView
		// },
	]
})

export default router


// { path: '/', redirect: '/login' },
