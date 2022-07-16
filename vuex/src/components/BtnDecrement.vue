<template lang="">
	<div>
		<button @click="decrementAction(100)">Decrement + 50</button>
	</div>
</template>
<script>
	import { mapActions } from 'vuex';
	export default {
		methods: {
			...mapActions(['decrementAction']),
		},
	};
</script>
<style lang=""></style>
