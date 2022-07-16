<template lang="">
	<div>
		<!-- Enviamos varios parámetros con el objeto -->
		<button @click="stateAction({ state: state, num: 100 })">
			{{ textBtn }}
		</button>
	</div>
</template>
<script>
	import { mapActions } from 'vuex';
	export default {
		props: {
			state: Boolean,
		},
		computed: {
			textBtn() {
				return this.state ? 'Aumentar' : 'Disminuir';
			},
		},
		methods: {
			...mapActions(['stateAction']),
		},
	};
</script>
<style lang=""></style>
