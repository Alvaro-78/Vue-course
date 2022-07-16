<template lang="">
	<div>
		<button @click="action" :disabled="desactivar">{{ text }}</button>
	</div>
</template>
<script>
	export default {
		props: {
			text: String,
			desactivar: {
				type: Boolean,
				default: false,
			},
		},
		methods: {
			action() {
				this.$emit('action');
			},
		},
	};
</script>
<style lang=""></style>
