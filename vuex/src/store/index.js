import { createStore } from 'vuex';

export default createStore({
	state: {
		counter: 150,
	},
	getters: {},
	// Cambia el state
	mutations: {
		increment(state, payload) {
			state.counter = state.counter + payload;
		},
		decrement(state, payload) {
			state.counter = state.counter - payload;
		},
	},
	// Acción sobre la Mutación
	actions: {
		incrementAction({ commit }) {
			commit('increment');
		},
		decrementAction({ commit }, num) {
			commit('decrement', num);
		},
		stateAction({ commit }, object) {
			if (object.state) {
				commit('increment', object.num);
			} else {
				commit('decrement', object.num);
			}
		},
	},
	modules: {},
});
