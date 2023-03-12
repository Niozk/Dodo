import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
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
			meta: {
				requiresAuth: true

			}
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

const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const removeListener = onAuthStateChanged(getAuth(), (user) => {
			removeListener();
			resolve(user);
		}, reject);
	});
}

router.beforeEach(async (to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (await getCurrentUser()) {
			next();
		} else {
			console.log("you dont have access");
			next('/');
		}
	} else {
		next();
	}
})

export default router
