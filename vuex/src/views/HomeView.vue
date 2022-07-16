<template>
	<div class="home">
		<h1 :style="colorCounter">Mi contador: {{ counter }}</h1>
		<button @click="increment(100)">Increment + 50</button>
		<BtnDecrement />
		<hr />
		<BtnAction :state="true" />
		<BtnAction :state="false" />
	</div>
</template>

<script>
	// @ is an alias to /src
	import { mapState, mapMutations, mapActions } from 'vuex';
	import BtnDecrement from '../components/BtnDecrement.vue';
	import BtnAction from '../components/BtnAction.vue';

	export default {
		name: 'HomeView',
		components: {
			BtnDecrement,
			BtnAction,
		},
		computed: {
			...mapState(['counter']),
			colorCounter() {
				return [this.counter >= 100 ? { color: 'green' } : { color: 'red' }];
			},
		},
		methods: {
			...mapMutations(['increment']),
			...mapActions(['incrementAction']),
		},
	};
</script>
