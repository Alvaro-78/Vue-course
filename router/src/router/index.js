import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'about',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
	},
	{
		path: '/blog',
		name: 'blog',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Blog.vue'),
	},
	{
		path: '/blog/:id',
		name: 'article',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Article.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
