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
			component: TodoSingle,
			meta: {
				requiresAuth: true
			}
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

router.beforeEach(async (to, from, next) => {
	const currentUser = await getCurrentUser();
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
	const isLoginPage = to.path === '/login';
	const isRegisterPage = to.path === '/register';

	if (requiresAuth && !currentUser && !isLoginPage && !isRegisterPage) {
		// If the user is not authenticated and the route requires authentication,
		// and the route is not the login page or the register page, redirect to the login page
		next({ path: '/login' });
	} else if (currentUser && (isLoginPage || isRegisterPage)) {
		// If the user is authenticated and trying to access the login page or the register page,
		// redirect to the main page
		next({ path: '/todos' });
	} else {
		// Otherwise, allow the user to proceed
		next();
	}
});
  
  

export default router
