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
			console.log(payload);
			const payloadId = payload.id;
			state.tasks = state.tasks.map((item) => item.id === payloadId)
				? payload
				: item;
			router.push('/');
			return;
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
			console.log('click en update');
			commit('update', task);
		},
	},
	modules: {},
});
