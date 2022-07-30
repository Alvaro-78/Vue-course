import { createStore } from 'vuex';
import router from '../router';

export default createStore({
	state: {
		tasks: [],
		task: {
			id: '',
			name: '',
			categories: [],
			state: '',
			number: 0,
		},
	},
	getters: {},
	mutations: {
		set(state, payload) {
			state.tasks.push(payload);
			console.log(state.tasks);
		},
		delete(state, payload) {
			state.tasks = state.tasks.filter((item) => item.id !== payload);
		},
		task(state, payload) {
			state.task = state.tasks.find((item) => item.id === payload);
		},
		update(state, payload) {
			console.log(state.tasks);
			state.tasks = state.tasks.map((item) => item.id === payload.id)
				? payload
				: item;
			router.push('/');
		},
	},
	actions: {
		setTasks({ commit }, task) {
			commit('set', task);
		},
		deleteTask({ commit }, id) {
			commit('delete', id);
		},
		setTask({ commit }, id) {
			commit('task', id);
		},
		updateTask({ commit }, task) {
			commit('update', task);
		},
	},
	modules: {},
});
