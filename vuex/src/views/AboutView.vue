<template>
	<div class="about">
		<h1>Mi contador: {{ $store.state.counter }}</h1>
	</div>
	<input type="text" v-model="text" />
	<h2>{{ text }}</h2>
</template>

<script>
	export default {
		data() {
			return {
				text: '',
			};
		},
	};
</script>
