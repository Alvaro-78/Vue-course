import { createStore } from 'vuex';
import router from '../router';

export default createStore({
	state: {
		tareas: [],
		tarea: {
			id: '',
			nombre: '',
			categorias: [],
			estado: '',
			numero: 0,
		},
	},
	mutations: {
		cargar(state, payload) {
			state.tareas = payload;
		},
		set(state, payload) {
			state.tareas.push(payload);
		},
		eliminar(state, payload) {
			state.tareas = state.tareas.filter((item) => item.id !== payload);
		},
		tarea(state, payload) {
			if (!state.tareas.find((item) => item.id === payload)) {
				router.push('/');
				return;
			}
			state.tarea = state.tareas.find((item) => item.id === payload);
		},
		update(state, payload) {
			state.tareas = state.tareas.map((item) =>
				item.id === payload.id ? payload : item
			);
			router.push('/');
		},
	},
	actions: {
		cargar({ commit }) {},
		async setTareas({ commit }, tarea) {
			const url =
				'https://console.firebase.google.com/project/vue-crud-4d638/database/vue-crud-4d638-default-rtdb/data/~2F';
			try {
				const res = await fetch(
					'https://console.firebase.google.com/project/vue-crud-4d638/database/vue-crud-4d638-default-rtdb/data/~2F/tareas.json',
					{
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json',
							'Access-Control-Allow-Origin': '*',
						},
						body: JSON.stringify(tarea),
					}
				);
				const dataDB = await res.json;
				console.log(dataDB);
			} catch (error) {
				console.log(error);
			}
			commit('set', tarea);
		},
		deleteTareas({ commit }, id) {
			commit('eliminar', id);
		},
		setTarea({ commit }, id) {
			commit('tarea', id);
		},
		updateTarea({ commit }, tarea) {
			commit('update', tarea);
		},
	},
	modules: {},
});
